import createUIComponent from "../helpers/create-ui-element";
import type { BaseUIProps } from "../helpers/interfaces";

interface ButtonProps extends BaseUIProps {
    text: string;
    id?: string;
}

/**
 * Create the button UI
 * @param ButtonProps - The properties related to the button e.g. (text, id) 
 * @returns HTMLElement
 */
function Button({ text, id, ...restProps }: ButtonProps): HTMLButtonElement {
    const button = createUIComponent('button', restProps) as HTMLButtonElement
    button.innerText = text;
    return button;
}

export default Button;
