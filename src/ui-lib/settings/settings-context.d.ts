/// <reference types="react" />
export declare const SettingsProvider: import("react").Provider<{
    dialogs: {
        isHidden: boolean;
        show: () => void;
        hide: () => void;
        toggle: () => void;
    };
}>, useUISettingsContext: () => {
    dialogs: {
        isHidden: boolean;
        show: () => void;
        hide: () => void;
        toggle: () => void;
    };
};
