import * as Cx from "../core";
import * as React from "react";
import { Instance } from "../ui/Instance";

export interface ButtonProps extends Cx.HtmlElementProps {
   /** Confirmation text or configuration object. See MsgBox.yesNo for more details. */
   confirm?: Cx.Prop<string | Cx.Config>;

   /** If true button appears in pressed state. Useful for implementing toggle buttons. */
   pressed?: Cx.BooleanProp;

   /** Name of the icon to be put on the left side of the button. */
   icon?: Cx.StringProp;

   /** HTML tag to be used. Default is `button`. */
   tag?: string;

   /** Base CSS class to be applied to the element. Default is 'button'. */
   baseClass?: string;

   /**
    * Determines if button should receive focus on mousedown event.
    * Default is `false`, which means that focus can be set only using the keyboard `Tab` key.
    */
   focusOnMouseDown?: boolean;

   /** Add type="submit" to the button. */
   submit?: boolean;

   /** Set to `true` to disable the button. */
   disabled?: Cx.BooleanProp;

   /** Set to `false` to disable the button. */
   enabled?: Cx.BooleanProp;

   /**
    * Click handler.
    *
    * @param e - Event.
    * @param instance - Cx widget instance that fired the event.
    */
   onClick?: string | ((e: MouseEvent, instance: Instance) => void);

   onMouseDown?: string | ((e: MouseEvent, instance: Instance) => void);

   /** Button type. */
   type?: "submit" | "button";

   /** If set to `true`, the Button will cause its parent Overlay (if one exists) to close. This, however, can be prevented if `onClick` explicitly returns `false`. */
   dismiss?: boolean;

   /** The form attribute specifies the form the button belongs to.
    * The value of this attribute must be equal to the `id` attribute of a `<form>` element in the same document.
    */
   form?: Cx.StringProp;
}

export class Button extends Cx.Widget<ButtonProps> {}
