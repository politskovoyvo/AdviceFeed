import { ComputedPlacement } from '@popperjs/core/lib/enums';
import { IUseDisclosureProps } from '../../../../utils/hooks/use-disclosure';
import { IUseOverlayProps } from '../../../Overlay/models';
export interface IUseTooltipProps extends IUseDisclosureProps, Pick<IUseOverlayProps, 'modifiers' | 'gutter' | 'strategy'> {
    /** @default false  */
    isDisabled?: boolean;
    /** @default true  */
    closeOnClick?: boolean;
    /** @default 100 */
    closeDelay?: number;
    /** @default 100 */
    openDelay?: number;
    /** @default top */
    placement?: ComputedPlacement;
    beforeLeave?(): void;
    beforeEnter?(): void;
    afterEnter?(): void;
    afterLeave?(): void;
}
