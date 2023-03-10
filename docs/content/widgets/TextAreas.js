import { Content, LabelsLeftLayout } from 'cx/ui';
import { Tab, TextArea } from 'cx/widgets';
import { CodeSnippet } from '../../components/CodeSnippet';
import { CodeSplit } from '../../components/CodeSplit';
import { ConfigTable } from '../../components/ConfigTable';
import { ImportPath } from '../../components/ImportPath';
import { Md } from '../../components/Md';
import configs from './configs/TextArea';


export const TextAreas = <cx>
   <Md>
      # Text Area

      <ImportPath path="import {TextArea} from 'cx/widgets';" />

      The `TextArea` control is used for larger text inputs. Besides allowing multi-line input, it's practically
      the same as the `TextField` control.

      <CodeSplit>

         <div class="widgets">
            <div layout={LabelsLeftLayout}>
               <TextArea label="Standard" value-bind="$page.text" rows={5} autoFocus />
               <TextArea label="Disabled" value-bind="$page.text" disabled />
               <TextArea label="Readonly" value-bind="$page.text" readOnly />
               <TextArea label="Placeholder" value-bind="$page.text" placeholder="Type something here..." />
               <TextArea label="Tooltip" value-bind="$page.text" tooltip='This is a tooltip.' />
               <TextArea label="Required" value-bind="$page.text" required />
               <TextArea label="Styled" value-bind="$page.text" inputStyle={{border: '1px solid green'}} />
               <TextArea label="View" value-bind="$page.text" mode="view" />
               <TextArea label="EmptyText" value-bind="$page.text" mode="view" emptyText="N/A" />
            </div>
         </div>
         <Content name="code">
            <Tab value-bind="$page.code.tab" mod="code" tab="wrap" text="TextArea" default/>
            <CodeSnippet fiddle="KCwMQoPf">{`
               <div layout={LabelsLeftLayout}>
                  <TextArea label="Standard" value-bind="$page.text" rows={5} autoFocus />
                  <TextArea label="Disabled" value-bind="$page.text" disabled />
                  <TextArea label="Readonly" value-bind="$page.text" readOnly />
                  <TextArea label="Placeholder" value-bind="$page.text" placeholder="Type something here..." />
                  <TextArea label="Tooltip" value-bind="$page.text" tooltip='This is a tooltip.' />
                  <TextArea label="Required" value-bind="$page.text" required />
                  <TextArea label="Styled" value-bind="$page.text" inputStyle={{border: '1px solid green'}} />
                  <TextArea label="View" value-bind="$page.text" mode="view" />
                  <TextArea label="EmptyText" value-bind="$page.text" mode="view" emptyText="N/A" />
               </div>
            `}</CodeSnippet>
         </Content>
      </CodeSplit>

      ## Configuration

      <ConfigTable props={configs} />

   </Md>
</cx>
