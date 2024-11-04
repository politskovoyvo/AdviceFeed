export declare function useNavigation(): {
    open: () => void;
    close: () => void;
    toggle: () => void;
    rollUp: () => void;
    expand: () => void;
    toggleExpand: () => void;
    changeOpenedCategories: (indexes: number[]) => void;
    opened: number[];
    visible: boolean;
    expanded: boolean;
};
