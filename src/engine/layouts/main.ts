import createElement from "../helpers/create-element";

function MainLayout(): { mount: any, appendElement: (elementsToAppend: HTMLElement[]) => void } {

    const mainLayoutDiv = createElement({
        elementType: 'div',
    });

    /**
     * Add the html element to the mainLayout
     * @param elementsToAppend - The html element to add to the main layout
     */
    function appendElement(elementsToAppend: HTMLElement[]) {
        /**
         * Append the provided element to the main layout
         */
        if (elementsToAppend) {
            elementsToAppend.map(
                elem => mainLayoutDiv.appendChild(elem)
            );
        }
    }

    /**
     * Append the main layout into the provided element
     * @param parent - The parent element to which main layout would be appended in
     */
    function mount(parent: HTMLElement) {
        console.log("%c★ Game Engine Initialized. Enjoy Game Creation ★", "color: magenta; font-size: 20px; font-family: monospace; background: black; padding: 4px;");
        parent.appendChild(mainLayoutDiv)
    }

    return {
        mount,
        appendElement
    };
}

export const mainLayout = MainLayout();