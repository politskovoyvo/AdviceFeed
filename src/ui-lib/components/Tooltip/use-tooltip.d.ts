import { TPropGetter } from '../../models';
import { IUseTooltipProps } from './models';
export declare function useTooltip(props: IUseTooltipProps): {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    getTransitionProps: () => {
        show: boolean;
        beforeEnter: () => void;
        afterLeave: (() => void) | undefined;
        beforeLeave: (() => void) | undefined;
        afterEnter: (() => void) | undefined;
    };
    getTriggerProps: TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
    getTooltipProps: TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
    getTooltipPositionerProps: TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
};
