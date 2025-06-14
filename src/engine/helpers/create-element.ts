import type { BaseUIProps } from "./interfaces";

interface createElementProps extends BaseUIProps {
    elementType: keyof HTMLElementTagNameMap,
}

/**
 * Create a HTML element
 * @param elementType - The type of element to create e.g ('div, 'button')
 * @param elementProps - The properties of the element created e.g. (id = 'div')
 * @returns The element created along with any properties attached
 */
function createElement({ elementType, elementProps, className, style, events }: createElementProps): HTMLElement {

    /**
     * Create the HTML element
     */
    const elem = document.createElement(elementType);

    /**
     * Add the provided properties to the created element
     */
    if (elementProps) {
        elementProps.forEach(element => {
            elem.setAttribute(element.name, element.value);
        });
    }

    /**
     * Attach the provided event listeners type e.g. (click, hover)
     */
    if (events?.length) {
        events.forEach(({ event, handler }) => {
            elem.addEventListener(event, handler);
        });
    }

    /**
     * Add the provided className
     */
    if (className) {
        elem.className = className;
    }

    /**
     * Add the style attribute if provided
     */
    if (style) {
        Object.assign(elem.style, style);
    }

    return elem;
}

export default createElement;