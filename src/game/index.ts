import type { EventHandler } from "../engine/helpers/interfaces";
import { scene } from "../engine/helpers/scene-manager";
import Button from "../engine/ui/button";

const buttonStyle = {
    backgroundColor: "Orange",
    color: "white",
    border: "none",
} as Partial<CSSStyleDeclaration>

const buttonClickEvent = {
    event: 'click',
    handler: handleButtonClickEvent
} as EventHandler;

let count: number = 0;
function handleButtonClickEvent(e: Event) {
    count++;
    const targetBtn = (e.target) as HTMLButtonElement;
    targetBtn.innerText = `Count: ${count}`
}

const button = Button({
    text: `Count ${count}`,
    style: buttonStyle,
    events: [buttonClickEvent]
});

scene.add(button);