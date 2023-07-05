import { MutableRefObject } from 'react';
export declare const isInShadowDom: (element: Element | null) => boolean;
export declare function getShadowRoot<T extends Element | MutableRefObject<Element | null>>(element: T | null | undefined): DocumentFragment | null;
