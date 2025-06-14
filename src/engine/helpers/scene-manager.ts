import { mainLayout } from "../layouts/main";
import createUIComponent from "./create-ui-element";

function SceneManager() {

    const sceneDiv = createUIComponent('div', { elementProps: [{ name: 'id', value: 'main-scene-div' }] });
    const sceneElements: HTMLElement[] = [];

    /**
     * Add the scene to the main layout
     */
    mainLayout.appendElement([sceneDiv]);

    /**
     * Add the object/ui to the scene
     * @param elementType - The ui element to add to the scene
     * @return HTMLElement
     */
    function add(elementType: HTMLElement): HTMLElement {
        sceneElements.push(elementType);
        sceneDiv.appendChild(elementType);
        return elementType;
    }

    return {
        add
    };
}

export const scene = SceneManager();