import { HtmlElement, Grid, Repeater, Content, Tab } from 'cx/widgets';
import { Controller, KeySelection } from 'cx/ui';
import { Svg, Rectangle, Text } from 'cx/svg';
import { Gridlines, NumericAxis, CategoryAxis, Chart, Column, Legend } from 'cx/charts';
import {Md} from 'docs/components/Md';
import {CodeSplit} from 'docs/components/CodeSplit';
import {CodeSnippet} from 'docs/components/CodeSnippet';



var categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class PageController extends Controller {
   init() {
      super.init();

      this.store.set('$page.points', Array.from({length: categories.length}, (_, i) => ({
         x: categories[i],
         v1: Math.random() * 30,
         v2: Math.random() * 30,
         v3: Math.random() * 30,
         a1: Math.random() * 30,
         a2: i < 7 ? Math.random() * 30 : null,
         a3: i < 10 ? Math.random() * 30 : null,
      })));
   }
}

export const AutoWidth = <cx>
   <Md controller={PageController}>
      <CodeSplit>

         # Auto-calculated Column Widths

         This example shows how to use auto-calculated column widths.

         <div class="widgets">
            <div>
               <Svg style="width:600px; height:400px;">
                  <Chart offset="20 -20 -40 40" axes={{
                        x: { type: CategoryAxis, uniform: true, labelAnchor: "end", labelRotation: -90, labelDy: '0.35em' },
                        y: { type: NumericAxis, vertical: true, snapToTicks: 0 }
                     }}>
                     <Gridlines/>
                     <Repeater records-bind="$page.points" recordAlias="$point">
                        <Column name="V1"
                                active-bind="$page.v1"
                                colorIndex={2}
                                width={0.8}
                                x-bind="$point.x"
                                y-bind="$point.v1"
                                tooltip-tpl="V1 {$point.x} {$point.v1:n}"
                                stack="v"
                                stacked
                                autoSize />

                        <Column name="V2"
                                active-bind="$page.v2"
                                colorIndex={1}
                                width={0.8}
                                x-bind="$point.x"
                                y-bind="$point.v2"
                                tooltip-tpl="V2 {$point.x} {$point.v2:n}"
                                stack="v"
                                stacked
                                autoSize />

                        <Column name="V3"
                                active-bind="$page.v3"
                                colorIndex={0}
                                width={0.8}
                                x-bind="$point.x"
                                y-bind="$point.v3"
                                tooltip-tpl="V3 {$point.x} {$point.v3:n}"
                                stack="z"
                                stacked
                                autoSize />

                        <Column name="A1"
                                active-bind="$page.a1"
                                colorIndex={11}
                                width={0.8}
                                x-bind="$point.x"
                                y-bind="$point.a1"
                                tooltip-tpl="A1 {$point.x} {$point.a1:n}"
                                stack="x"
                                stacked
                                autoSize />

                        <Column name="A2"
                                active-bind="$page.a2"
                                colorIndex={12}
                                width={0.8}
                                x-bind="$point.x"
                                y-bind="$point.a2"
                                tooltip-tpl="A2 {$point.x} {$point.a2:n}"
                                stack="a"
                                stacked
                                autoSize />

                        <Column name="A3"
                                active-bind="$page.a3"
                                colorIndex={13}
                                width={0.8}
                                x-bind="$point.x"
                                y-bind="$point.a3"
                                tooltip-tpl="A3 {$point.x} {$point.a3:n}"
                                stack="a"
                                stacked
                                autoSize />

                     </Repeater>
                  </Chart>
               </Svg>
               <Legend />
               </div>
         </div>

         <Content name="code">
               <Tab value-bind="$page.code.tab" tab="controller" mod="code" text='Controller' />
               <Tab value-bind="$page.code.tab" tab="chart" mod="code" default text='Chart' />
         <CodeSnippet fiddle="oXFtcGiA" visible-expr="{$page.code.tab}=='controller'">{`
         var categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

         class PageController extends Controller {
            init() {
               super.init();

               this.store.set('$page.points', Array.from({length: categories.length}, (_, i) => ({
                  x: categories[i],
                  v1: Math.random() * 30,
                  v2: Math.random() * 30,
                  v3: Math.random() * 30,
                  a1: Math.random() * 30,
                  a2: i < 7 ? Math.random() * 30 : null,
                  a3: i < 10 ? Math.random() * 30 : null,
               })));
            }
         }
         `}</CodeSnippet>
         <CodeSnippet fiddle="oXFtcGiA" visible-expr="{$page.code.tab}=='chart'">{`
         <Svg style="width:600px; height:400px;">
            <Chart offset="20 -20 -40 40" axes={{
                  x: { type: CategoryAxis, uniform: true, labelAnchor: "end", labelRotation: -90, labelDy: '0.35em' },
                  y: { type: NumericAxis, vertical: true, snapToTicks: 0 }
               }}>
               <Gridlines/>
               <Repeater records-bind="$page.points" recordAlias="$point">
                  <Column name="V1"
                          active-bind="$page.v1"
                          colorIndex={2}
                          width={0.8}
                          x-bind="$point.x"
                          y-bind="$point.v1"
                          tooltip-tpl="V1 {$point.x} {$point.v1:n}"
                          stack="v"
                          stacked
                          autoSize />

                  <Column name="V2"
                          active-bind="$page.v2"
                          colorIndex={1}
                          width={0.8}
                          x-bind="$point.x"
                          y-bind="$point.v2"
                          tooltip-tpl="V2 {$point.x} {$point.v2:n}"
                          stack="v"
                          stacked
                          autoSize />

                  <Column name="V3"
                          active-bind="$page.v3"
                          colorIndex={0}
                          width={0.8}
                          x-bind="$point.x"
                          y-bind="$point.v3"
                          tooltip-tpl="V3 {$point.x} {$point.v3:n}"
                          stack="z"
                          stacked
                          autoSize />

                  <Column name="A1"
                          active-bind="$page.a1"
                          colorIndex={11}
                          width={0.8}
                          x-bind="$point.x"
                          y-bind="$point.a1"
                          tooltip-tpl="A1 {$point.x} {$point.a1:n}"
                          stack="x"
                          stacked
                          autoSize />

                  <Column name="A2"
                          active-bind="$page.a2"
                          colorIndex={12}
                          width={0.8}
                          x-bind="$point.x"
                          y-bind="$point.a2"
                          tooltip-tpl="A2 {$point.x} {$point.a2:n}"
                          stack="a"
                          stacked
                          autoSize />

                  <Column name="A3"
                          active-bind="$page.a3"
                          colorIndex={13}
                          width={0.8}
                          x-bind="$point.x"
                          y-bind="$point.a3"
                          tooltip-tpl="A3 {$point.x} {$point.a3:n}"
                          stack="a"
                          stacked
                          autoSize />

               </Repeater>
            </Chart>
         </Svg>
         <Legend />
          `}</CodeSnippet>
         </Content>
      </CodeSplit>
   </Md>
</cx>;

