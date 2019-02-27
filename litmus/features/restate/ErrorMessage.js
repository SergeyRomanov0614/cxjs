import {FirstVisibleChildLayout, Restate} from "cx/ui";
import {Button} from "cx/widgets";

export default <cx>
   <div>
      Nesto
      <Restate
         detached
         onError={(error, instance, info) => {
            let {store} = instance;
            store.set("error", error);
         }}
         layout={FirstVisibleChildLayout}
      >
         <div visible-expr="!!{error}">
            Error

            <Button
               onClick={(e, {store}) => {
                  store.delete("error");
                  store.delete("counter");
               }}
            >
               Retry
            </Button>
         </div>
         <div
            onExplore={(ctx, {store}) => {
               if (store.get("counter") > 5)
                  throw new Error("Greska");
            }}
         >
            <Button
               onClick={(e, {store}) => {
                  store.update("counter", c => (c || 0) + 1)
               }}>
               ++
            </Button>
            <span text-bind="counter" />
         </div>
      </Restate>
      Jos nesto
   </div>
</cx>