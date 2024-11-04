/// <reference types="react" />
import { IWayContext } from './models';
export declare const TwoWaySwitcherProvider: import("react").Provider<{
    inputProps: import("react").InputHTMLAttributes<HTMLInputElement>;
    firstWay: import("react").FunctionComponentElement<import("react").ProviderProps<IWayContext>>;
    secondWay: import("react").FunctionComponentElement<import("react").ProviderProps<IWayContext>>;
    getTrackProps: import("../../models").TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
}>, useTwoWaySwitcherContext: () => {
    inputProps: import("react").InputHTMLAttributes<HTMLInputElement>;
    firstWay: import("react").FunctionComponentElement<import("react").ProviderProps<IWayContext>>;
    secondWay: import("react").FunctionComponentElement<import("react").ProviderProps<IWayContext>>;
    getTrackProps: import("../../models").TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
};
export declare const WayProvider: import("react").Provider<IWayContext>, useWayContext: () => IWayContext;
