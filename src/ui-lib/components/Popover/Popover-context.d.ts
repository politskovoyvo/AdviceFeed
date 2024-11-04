/// <reference types="react" />
export declare const PopoverProvider: import("react").Provider<{
    forceUpdate: () => void;
    isOpen: boolean;
    close: () => void;
    getPopoverPositionerProps: import("../../models").TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
    getTransitionProps: () => import("@headlessui/react").TransitionRootProps<import("react").ExoticComponent<{
        children?: import("react").ReactNode;
    }>>;
    getPopoverProps: import("../../models").TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
    getTriggerProps: import("../../models").TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
}>, usePopoverContext: () => {
    forceUpdate: () => void;
    isOpen: boolean;
    close: () => void;
    getPopoverPositionerProps: import("../../models").TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
    getTransitionProps: () => import("@headlessui/react").TransitionRootProps<import("react").ExoticComponent<{
        children?: import("react").ReactNode;
    }>>;
    getPopoverProps: import("../../models").TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
    getTriggerProps: import("../../models").TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
};
