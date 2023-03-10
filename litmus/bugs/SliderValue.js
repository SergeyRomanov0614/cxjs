import { Slider } from "cx/widgets";

export default (
   <cx>
      <div style="display: flex; flex-direction: row;">
         <div style="width: 300px; height: 100px; padding: 30px;">
            <h3 style="align-text: center;">Vertical Sliders</h3>
            <Slider
               vertical
               wheel
               increment={1}
               max={30}
               value-bind="$page.vertical.from1"
               step={1}
               rangeStyle="background:red"
            />
            <Slider
               vertical
               wheel
               increment={1}
               invert
               max={50}
               value-bind="$page.vertical.to"
               step={1}
               rangeStyle="background:green"
            />
            <Slider
               vertical
               from-bind="$page.vertical.range1"
               to-bind="$page.vertical.range2"
               step={1}
               rangeStyle="background:blue"
            />
            <Slider
               vertical
               min={123}
               max={1234}
               invert
               from-bind="$page.vertical.range3"
               to-bind="$page.vertical.range4"
               step={1}
               rangeStyle="background:yellow"
            />
         </div>

         <div style="padding-top: 100px; height: 200px; width: 400px;">
            <h4>Values:</h4>
            <table style="font-family: arial, sans-serif; border-collapse: collapse; width: 100%;">
               <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Range From</th>
                  <th>Range To</th>
                  <th>Range From 2</th>
                  <th>Range To 2</th>
               </tr>
               <tr>
                  <td
                     style="border: 1px solid #dddddd; text-align: left; padding: 8px;"
                     text-bind="$page.vertical.from1"
                  ></td>
                  <td style="border: 1px solid #dddddd; text-align: center;" text-bind="$page.vertical.to"></td>
                  <td style="border: 1px solid #dddddd; text-align: center;" text-bind="$page.vertical.range1"></td>
                  <td style="border: 1px solid #dddddd; text-align: center;" text-bind="$page.vertical.range2"></td>
                  <td style="border: 1px solid #dddddd; text-align: center;" text-bind="$page.vertical.range3"></td>
                  <td style="border: 1px solid #dddddd; text-align: center;" text-bind="$page.vertical.range4"></td>
               </tr>
            </table>
         </div>

         <div style="width: 300px; height: 100px; padding: 30px; margin-left: 200px;">
            <h3 style="align-text: center;">Sliders</h3>
            <Slider
               vertical
               wheel
               increment={1}
               max={30}
               from-bind="$page.invert.from"
               step={1}
               rangeStyle="background:red"
            />
            <Slider
               vertical
               wheel
               increment={1}
               max={50}
               to-bind="$page.invert.to"
               step={1}
               rangeStyle="background:green"
            />
            <Slider
               vertical
               from-bind="$page.invert.range1"
               to-bind="$page.invert.range2"
               step={1}
               rangeStyle="background:blue"
            />
            <Slider
               vertical
               min={123}
               max={1234}
               from-bind="$page.invert.range3"
               to-bind="$page.invert.range4"
               step={1}
               rangeStyle="background:yellow"
               invert
            />
         </div>

         <div style="padding-top: 100px; height: 200px; width: 400px;">
            <h4>Values:</h4>
            <table style="font-family: arial, sans-serif; border-collapse: collapse; width: 100%;">
               <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Range From</th>
                  <th>Range To</th>
                  <th>Range From 2</th>
                  <th>Range To 2</th>
               </tr>
               <tr>
                  <td
                     style="border: 1px solid #dddddd; text-align: left; padding: 8px;"
                     text-bind="$page.invert.from"
                  ></td>
                  <td style="border: 1px solid #dddddd; text-align: center;" text-bind="$page.invert.to"></td>
                  <td style="border: 1px solid #dddddd; text-align: center;" text-bind="$page.invert.range1"></td>
                  <td style="border: 1px solid #dddddd; text-align: center;" text-bind="$page.invert.range2"></td>
                  <td style="border: 1px solid #dddddd; text-align: center;" text-bind="$page.invert.range3"></td>
                  <td style="border: 1px solid #dddddd; text-align: center;" text-bind="$page.invert.range4"></td>
               </tr>
            </table>
         </div>
      </div>
   </cx>
);
