/// <reference types="react" />
import { TAccordionContext, TAccordionItemContextProps } from './models';
export declare const AccordionProvider: import("react").Provider<TAccordionContext>, useAccordionContext: () => TAccordionContext;
export declare const AccordionItemProvider: import("react").Provider<TAccordionItemContextProps>, useAccordionItemContext: () => TAccordionItemContextProps;
export declare const AccordionDescendantsProvider: import("react").Provider<import("../../components/Descendants").DescendantsManager<HTMLButtonElement, {}>>, useAccordionDescendantsContext: () => import("../../components/Descendants").DescendantsManager<HTMLButtonElement, {}>, useAccordionDescendants: () => import("../../components/Descendants").DescendantsManager<HTMLButtonElement, {}>, useAccordionDescendant: (options?: {
    disabled?: boolean | undefined;
    id?: string | undefined;
} | undefined) => {
    descendants: import("../../components/Descendants").DescendantsManager<HTMLElement, Record<string, any>>;
    index: number;
    enabledIndex: number;
    register: (node: HTMLButtonElement | null) => void;
};
