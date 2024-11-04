/// <reference types="react" />
import { INavigationOptions } from './models';
export declare const NavigationProvider: import("react").Provider<{
    visible: boolean;
    expanded: boolean;
    opened: number[];
    setOpened: import("react").Dispatch<import("react").SetStateAction<number[]>>;
    setVisible: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setExpanded: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    options: INavigationOptions;
}>, useNavigationContext: () => {
    visible: boolean;
    expanded: boolean;
    opened: number[];
    setOpened: import("react").Dispatch<import("react").SetStateAction<number[]>>;
    setVisible: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setExpanded: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    options: INavigationOptions;
};
export declare const NavigationPopoverProvider: import("react").Provider<boolean>, useNavigationPopoverContext: () => boolean;
export declare function useNavigationSettings(options?: INavigationOptions): {
    visible: boolean;
    expanded: boolean;
    opened: number[];
    setOpened: import("react").Dispatch<import("react").SetStateAction<number[]>>;
    setVisible: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setExpanded: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    options: INavigationOptions;
};
