import { CSSProperties, KeyboardEvent } from 'react';
import { TPropGetter } from '../../models';
import { IUseTabListProps, IUseTabPanelProps, IUseTabPanelsProps, IUseTabProps, IUseTabsProps } from './models';
export declare const TabsDescendantsProvider: import("react").Provider<import("../Descendants").DescendantsManager<HTMLButtonElement, {}>>, useTabsDescendantsContext: () => import("../Descendants").DescendantsManager<HTMLButtonElement, {}>, useTabsDescendants: () => import("../Descendants").DescendantsManager<HTMLButtonElement, {}>, useTabsDescendant: (options?: {
    disabled?: boolean | undefined;
    id?: string | undefined;
} | undefined) => {
    descendants: import("../Descendants").DescendantsManager<HTMLElement, Record<string, any>>;
    index: number;
    enabledIndex: number;
    register: (node: HTMLButtonElement | null) => void;
};
export declare function useTabs(props: IUseTabsProps): {
    id: string;
    selectedIndex: number;
    focusedIndex: number;
    previousSelect: number;
    setPreviousSelect: import("react").Dispatch<import("react").SetStateAction<number>>;
    setSelectedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    setFocusedIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
    isLazy: boolean | undefined;
    lazyBehavior: import("../../utils/methods/lazy").LazyMode;
    descendants: import("../Descendants").DescendantsManager<HTMLButtonElement, {}>;
    htmlProps: {
        id?: string | undefined;
    };
};
export declare function useTabList<P extends IUseTabListProps>(props: P): P & {
    role: string;
    onKeyDown: (event: KeyboardEvent<Element>) => void;
};
export declare function useTab<P extends IUseTabProps>(props: P): Omit<P, "isDisabled" | "isFocusable"> & {
    index: number;
    ref: (node: any) => void;
    onClick: (event: any) => void;
    disabled: boolean | undefined;
    isDisabled: boolean | undefined;
    'aria-disabled': boolean | undefined;
    id: string;
    type: "button";
    isSelected: boolean;
    isShowLeftDivider: boolean;
    'aria-selected': boolean;
    'aria-controls': string;
    onFocus: ((event: any) => void) | undefined;
};
export declare function useTabPanels<P extends IUseTabPanelsProps>(props: P): P & {
    children: import("react").FunctionComponentElement<import("react").ProviderProps<import("./models").IUseTabPanelContext | undefined>>[];
};
export declare function useTabPanel(props: IUseTabPanelProps): {
    getPanelProps: TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
    getTransitionProps: () => {
        show: boolean;
        afterLeave: () => void;
        afterEnter: () => void;
    };
};
export declare function useTabIndicator(): CSSProperties;
