type elementHasTo = "show" | "hide";

/**
 * Hide the html element using class, id or HTMLElement
 * @param element - The html element to hide
 */
function hide(element: string | HTMLElement) {
    process(element, 'hide');
}

/**
 * Show the html element using class, id or HTMLElement
 * @param element - The html element to show 
 */
function show(element: HTMLElement) {
    process(element, 'show');
}

/**
 * Hide/Show the html element based on class or id or HTMLElement itself
 * @param element - The element to show/hide
 * @param showOrHide - Whether to show or hide the element defaults to show
 */
function process(element: string | HTMLElement, showOrHide: elementHasTo) {

    let display = 'block';

    if (showOrHide == 'hide') {
        display = 'none';
    }

    if (typeof element === 'string') {

        /**
         * If the element starts with .(dot)
         * it means it is the class of the html element
         */
        if (element.startsWith('.')) {

            document.querySelectorAll<HTMLElement>(element)!.forEach(
                elem => elem.style.display = display
            );

            /**
             * If it starts with # 
             * it means it is the ID of the html element
             */
        } else if (element.startsWith('#')) {

            const el = document.getElementById(element);
            if (el) el.style.display = display;

        } else {

            throw new Error(`Unsupported selector type ${element.charAt(0)} in ${element}`)
        }
    } else if (element instanceof HTMLElement) {

        element.style.display = display;
    } else {

        throw new Error(`Unsupported element type provided ${element}`)
    }
}

export { show, hide }