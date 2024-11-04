import { TMaybeRenderProps } from '../../../../models';
import { IUsePopoverProps } from './use-popover-props.interface';
export interface IPopoverProps extends IUsePopoverProps {
    children?: TMaybeRenderProps<{
        isOpen: boolean;
        close(): void;
        forceUpdate: (() => void) | undefined;
    }>;
}
