import createElement from "./create-element";
import type { BaseUIProps } from "./interfaces";

/**
 * Use this function specifically to create the UI components 
 * It uses the existing createElement function to make it possible
 * 
 * @param elementType - Pass the type of element to create e.g. (button, div)
 * @param BaseUIProps - All the other non-essential props
 * @returns HTMLElement
 */
function createUIComponent(elementType: keyof HTMLElementTagNameMap, {
    elementProps = [],
    className,
    style,
    events,
}: BaseUIProps) {
    return createElement({ elementType, elementProps, className, style, events })
}

export default createUIComponent;