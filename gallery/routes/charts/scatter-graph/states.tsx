import { cx, Section, FlexRow } from 'cx/widgets';
import { bind, expr, tpl, Controller } from 'cx/ui';
import { Chart, ScatterGraph, NumericAxis, Gridlines, Legend } from 'cx/charts';
import { Svg } from 'cx/svg';
import casual from '../../../util/casual';

class PageController extends Controller {
    init() {
        super.init();
        this.store.set('$page.reds', Array.from({ length: 200 }, (_, i) => ({
            x: 100 + Math.random() * 300,
            y: Math.random() * 300,
            size: Math.random() * 20
        })));
        this.store.set('$page.blues', Array.from({ length: 200 }, (_, i) => ({
            x: Math.random() * 300,
            y: 100 + Math.random() * 300,
            size: Math.random() * 20
        })));
    }
}

export default <cx>
    <FlexRow wrap spacing='large' target='desktop' controller={PageController} >
        <Section mod="well" >
            <FlexRow align="center">
            <Svg style="width:500px; height:400px;">
                <Chart offset="20 -20 -40 130" axes={{
                    x: { type: NumericAxis, snapToTicks: 1 },
                    y: { type: NumericAxis, vertical: true, snapToTicks: 1 }
                }}>
                    <Gridlines />
                    <ScatterGraph data={bind("$page.reds")}
                        name="Reds"
                        colorIndex={1}
                        shape="square"
                        sizeField="size"
                        active={bind("$page.showReds")}
                    />

                    <ScatterGraph data={bind("$page.blues")}
                        name="Blues"
                        colorIndex={5}
                        sizeField="size"
                        active={bind("$page.showBlues")}
                    />

                </Chart>
            </Svg>
            <Legend vertical />
            </FlexRow>
        </Section>
    </FlexRow>
</cx>

import { hmr } from '../../hmr.js';
hmr(module);