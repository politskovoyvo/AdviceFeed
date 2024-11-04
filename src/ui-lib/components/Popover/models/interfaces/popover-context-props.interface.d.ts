import { IPopoverContentProps } from './popover-content-props.interface';
export interface IPopoverContextProps extends Omit<IPopoverContentProps, 'custom'> {
}
