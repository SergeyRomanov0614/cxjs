var rollup = require('rollup'),
   path = require('path'),
   fs = require('fs'),
   babel = require('rollup-plugin-babel'),
   babelConfig = require('./babel.config'),
   importAlias = require('./importAlias'),
   addToManfiest = require('./addToManifest'),
   multiEntry = require('rollup-plugin-multi-entry'),
   scss = require('rollup-plugin-scss');


function getPath(basePath) {
   return function (x) {
      if (!x)
         return basePath;
      return path.resolve(basePath, x);
   }
}

var src = getPath(path.resolve(__dirname, '../src'));
var dist = getPath(path.resolve(__dirname, '../dist'));

const endsWith = (x, y) => x.lastIndexOf(y) === x.length - y.length;

function isUI(id) {
   var relativePath = id.substring(src().length+1).replace(/\\/g, '/');
   switch (relativePath) {
      case 'Component':
      case 'ui/VDOM':
      case 'ui/icons/Icon':
      case 'ui/Widget':
      case 'ui/PureContainer':
      case 'ui/CSS':
      case 'ui/CSSHelper':
      case 'ui/selection/Selection':
      case 'ui/layout/Layout':
      case 'ui/ResizeManager':
      case 'ui/FocusManager':
      case 'ui/Controller':
         //console.log(relativePath);
         return true;
   }
   return false;
}

var entries = [{
   name: 'util',
   options: {
      entry: [src('util/index.js')]
   },
   output: {}
}, {
   name: 'data',

   options: {
      entry: src('data/index.js')
   },
   output: {}
}, {
   name: 'ui',
   options: {
      entry: [src('ui/index.js')]
   },
   output: {}
}, {
   name: 'widgets',
   css: true,
   options: {
      entry: [src('widgets/index.js'), src('widgets/index.scss')]
   },
   external: isUI,
   output: {}
}, {
   name: 'svg',
   css: true,
   options: {
      entry: [src('svg/index.js'), src('svg/index.scss')]
   },
   external: isUI,
   output: {}
}, {
   name: 'charts',
   css: true,
   options: {
      entry: [src('charts/index.js'), src('charts/index.scss')]
   },
   external: isUI,
   output: {}
}];

var paths = {
   [src('./util/')]: '@/util',
   [src('./app/')]: '@/ui',
   [src('./data/')]: '@/data',
   [src('./ui/svg/charts')]: '@/charts',
   [src('./ui/svg/')]: '@/svg',
   [src('./')]: '@/ui',
};

var manifest = {
   'ui/VDOM': {js: 'src/ui/Widget'}
};



var all = entries.map(function(e) {
   // if (e.name != 'charts.js')
   //    return;



   var options = Object.assign({
      //treeshake: false,
      sourceMap:  true,
      external: function (id) {

         if (id.indexOf('babel') == 0)
            throw new Error('Babel stuff detected: ' + id);

         switch (id) {
            case 'route-parser':
            case 'cx-react':
            case 'intl-io':
               return true;

            default:
               return id[0] == '@'
         }
      },
      plugins: [
         multiEntry(),
         addToManfiest(manifest, paths, e.name),
         importAlias({
            manifest: manifest,
            external: e.external,
            paths: paths
         }),
         scss({
            output: e.css && dist(e.name + '.css') || false
         }),
         babel(babelConfig),
      ]
   }, e.options);

   return rollup
      .rollup(options)
      .then(function (bundle) {
         var result = bundle.generate(Object.assign({
            format: 'cjs'
         }, e.output));

         if (e.name) {
            //var code = result.code.replace(/from '@\//g, "from './");
            var code = result.code.replace(/require\('@\//g, "require('./");
            fs.writeFileSync(dist(e.name + '.js'), code);
            console.log(e.name + '.js', code.length / 1000, 'kB');
         }
      })
      .catch(e => {
         console.log(e);
      });
});

Promise
   .all(all)
   .then(()=> {
      fs.writeFileSync(dist('manifest.js'), 'module.exports = ' + JSON.stringify(manifest, null, 2));
   });
