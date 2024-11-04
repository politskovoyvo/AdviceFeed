import { ComputedPlacement } from '@popperjs/core/lib/enums';
import { PositioningStrategy } from '@popperjs/core/lib/types';
import { LazyMode } from '../../../../utils/methods/lazy';
import { IUseOverlayProps } from '../../../Overlay/models';
import { EPopoverTrigger } from '../enums';
export interface IUsePopoverProps extends Pick<IUseOverlayProps, 'boundary'> {
    id?: string;
    isOpen?: boolean;
    defaultIsOpen?: boolean;
    toggleShow?: boolean;
    open?: () => void;
    close?: () => void;
    trigger?: keyof typeof EPopoverTrigger;
    strategy?: PositioningStrategy;
    placement?: ComputedPlacement;
    openDelay?: number;
    closeDelay?: number;
    isLazy?: boolean;
    lazyBehavior?: LazyMode;
    isIgnoreTouches?: boolean;
}
