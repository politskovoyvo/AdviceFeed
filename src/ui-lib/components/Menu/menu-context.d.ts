/// <reference types="react" />
export declare const MenuContext: import("react").Context<Omit<{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    toggle: () => void;
    descendants: import("../Descendants").DescendantsManager<HTMLElement, {}>;
    isLazy: boolean | undefined;
    lazyBehavior: import("../../utils/methods/lazy").LazyMode | undefined;
    placement: import("@popperjs/core/lib/enums").ComputedPlacement;
    closeOnBlur: boolean | undefined;
    closeOnSelect: boolean;
    menuRef: import("react").RefObject<HTMLDivElement>;
    menuId: string;
    buttonId: string;
    overlay: {
        getOverlayProps: import("../../models").TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
        getReferenceProps: import("../../models").TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
        overlayRef: <T extends HTMLElement>(node: T | null) => void;
        referenceRef: <T_1 extends Element | import("@popperjs/core/lib/types").VirtualElement>(node: T_1 | null) => void;
        update(): void;
        forceUpdate(): void;
    };
    buttonRef: import("react").RefObject<HTMLButtonElement>;
}, "descendants"> | undefined>;
export declare function useMenuContext(): Omit<{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    toggle: () => void;
    descendants: import("../Descendants").DescendantsManager<HTMLElement, {}>;
    isLazy: boolean | undefined;
    lazyBehavior: import("../../utils/methods/lazy").LazyMode | undefined;
    placement: import("@popperjs/core/lib/enums").ComputedPlacement;
    closeOnBlur: boolean | undefined;
    closeOnSelect: boolean;
    menuRef: import("react").RefObject<HTMLDivElement>;
    menuId: string;
    buttonId: string;
    overlay: {
        getOverlayProps: import("../../models").TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
        getReferenceProps: import("../../models").TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
        overlayRef: <T extends HTMLElement>(node: T | null) => void;
        referenceRef: <T_1 extends Element | import("@popperjs/core/lib/types").VirtualElement>(node: T_1 | null) => void;
        update(): void;
        forceUpdate(): void;
    };
    buttonRef: import("react").RefObject<HTMLButtonElement>;
}, "descendants">;
