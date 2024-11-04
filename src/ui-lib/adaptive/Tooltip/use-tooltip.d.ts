/// <reference types="react" />
import { TPropGetter } from '../../models';
import { TUseTooltip } from './models';
export declare function useTooltip(props: TUseTooltip): {
    label: import("react").ReactNode;
    isDisabled: boolean | undefined;
    getChildrenProps: TPropGetter<Record<string, unknown>, import("../../models/types/prop-getter.type").TDOMAttributes<import("../../models/types/prop-getter.type").IDOMElement>>;
    open?: (() => void) | undefined;
    className?: string | undefined;
    id?: string | undefined;
    strategy?: import("@popperjs/core/lib/types").PositioningStrategy | undefined;
    placement?: import("@popperjs/core/lib/enums").ComputedPlacement | undefined;
    close?: (() => void) | undefined;
    beforeEnter?: (() => void) | undefined;
    afterEnter?: (() => void) | undefined;
    beforeLeave?: (() => void) | undefined;
    afterLeave?: (() => void) | undefined;
    isOpen?: boolean | undefined;
    noneStyles?: boolean | undefined;
    defaultIsOpen?: boolean | undefined;
    openDelay?: number | undefined;
    closeDelay?: number | undefined;
    gutter?: number | undefined;
    modifiers?: Partial<import("@popperjs/core/lib/types").Modifier<string, any>>[] | undefined;
    closeOnClick?: boolean | undefined;
};
