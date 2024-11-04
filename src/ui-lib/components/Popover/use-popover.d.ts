import { TransitionRootProps } from '@headlessui/react/dist/components/transitions/transition';
import { IDOMElement, TDOMAttributes, TPropGetter } from '../../models/types/prop-getter.type';
import { IUsePopoverProps } from './models';
export declare function usePopover(props?: IUsePopoverProps): {
    forceUpdate: () => void;
    isOpen: boolean;
    close: () => void;
    getPopoverPositionerProps: TPropGetter<Record<string, unknown>, TDOMAttributes<IDOMElement>>;
    getTransitionProps: () => TransitionRootProps;
    getPopoverProps: TPropGetter<Record<string, unknown>, TDOMAttributes<IDOMElement>>;
    getTriggerProps: TPropGetter<Record<string, unknown>, TDOMAttributes<IDOMElement>>;
};
export type TUsePopoverReturn = ReturnType<typeof usePopover>;
