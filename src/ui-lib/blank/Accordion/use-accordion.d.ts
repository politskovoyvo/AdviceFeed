import { ButtonHTMLAttributes, ComponentProps, HTMLAttributes, Ref, RefAttributes } from 'react';
import { IUseAccordionItemProps, IUseAccordionProps } from './models';
export type TUseAccordionReturn = ReturnType<typeof useAccordion>;
export declare function useAccordion(props: IUseAccordionProps): {
    descendants: import("../../components/Descendants").DescendantsManager<HTMLButtonElement, {}>;
    focusedIndex: number;
    getAccordionItemProps: (idx: number | null) => {
        isOpen: boolean;
        onChange: (state: boolean) => void;
    };
    htmlProps: {};
    indexes: number[];
    setFocusedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    setIndexes: import("react").Dispatch<import("react").SetStateAction<number[]>>;
};
export type TUseAccordionItemReturn = ReturnType<typeof useAccordionItem>;
export declare function useAccordionItem(props: IUseAccordionItemProps): {
    buttonRef: import("react").RefObject<HTMLButtonElement>;
    contentRef: import("react").RefObject<HTMLDivElement>;
    disabled: boolean;
    getButtonProps: (buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>, ref?: Ref<HTMLButtonElement> | null) => ComponentProps<'button'>;
    getContentProps: (contentProps?: HTMLAttributes<HTMLDivElement>, ref?: Ref<HTMLDivElement> | null) => HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>;
    htmlProps: {};
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
};
