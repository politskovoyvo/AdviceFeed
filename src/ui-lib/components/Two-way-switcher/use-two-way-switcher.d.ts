import { InputHTMLAttributes } from 'react';
import { TPropGetter } from '../../models';
import { TUseTwoWaySwitcherProps, TUseWayProps } from './models';
export type TUseTwoWaySwitcherReturn = ReturnType<typeof useTwoWaySwitcher>;
export type TUseWayReturn = ReturnType<typeof useWay>;
export declare function useTwoWaySwitcher(props: TUseTwoWaySwitcherProps): {
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    firstWay: import("react").FunctionComponentElement<import("react").ProviderProps<import("./models").IWayContext>>;
    secondWay: import("react").FunctionComponentElement<import("react").ProviderProps<import("./models").IWayContext>>;
    getTrackProps: TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
};
export declare function useWay(props: TUseWayProps): {
    selected: boolean;
    disabled: boolean;
};
