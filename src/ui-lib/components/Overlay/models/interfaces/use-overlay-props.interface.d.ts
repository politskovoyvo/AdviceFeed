import { ComputedPlacement } from '@popperjs/core/lib/enums';
import { Modifier } from '@popperjs/core/lib/popper-lite';
import { PositioningStrategy } from '@popperjs/core/lib/types';
export interface IUseOverlayProps {
    /** @default true */
    enabled?: boolean;
    /** Отступ
     * @default 4 */
    gutter?: number;
    /** @default false */
    preventOverflow?: boolean;
    /** Разворачивать если заходит за края
     * @default true */
    flip?: boolean;
    matchWidth?: boolean;
    /** @default absolute */
    strategy?: PositioningStrategy;
    /** @default clippingParents */
    boundary?: 'clippingParents' | 'scrollParent' | HTMLElement;
    /** @default true */
    eventListeners?: boolean | {
        scroll?: boolean;
        resize?: boolean;
    };
    /** @default bottom-start */
    placement?: ComputedPlacement;
    modifiers?: Array<Partial<Modifier<string, any>>>;
}
