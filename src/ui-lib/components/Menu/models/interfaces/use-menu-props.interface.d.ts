import { IUseDisclosureProps } from '../../../../utils/hooks/use-disclosure';
import { LazyMode } from '../../../../utils/methods/lazy';
import { IUseOverlayProps } from '../../../Overlay/models';
export interface IUseMenuProps extends Omit<IUseOverlayProps, 'enabled'>, IUseDisclosureProps {
    /** @default true */
    closeOnSelect?: boolean;
    /** @default false */
    closeOnBlur?: boolean;
    /** @default false */
    isLazy?: boolean;
    /** @default unmount */
    lazyBehavior?: LazyMode;
}
