type elementPropsType = {
    name: string,
    value: string,
}

export type EventHandler = {
    event: keyof HTMLElementEventMap,
    handler: EventListener
}

export interface BaseUIProps {
    elementProps?: elementPropsType[];
    className?: string;
    style?: Partial<CSSStyleDeclaration>;
    events?: EventHandler[];
}