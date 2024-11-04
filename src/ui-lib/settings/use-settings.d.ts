export type TUseSettingsReturn = ReturnType<typeof useSettings>;
export declare function useSettings(): {
    dialogs: {
        isHidden: boolean;
        show: () => void;
        hide: () => void;
        toggle: () => void;
    };
};
