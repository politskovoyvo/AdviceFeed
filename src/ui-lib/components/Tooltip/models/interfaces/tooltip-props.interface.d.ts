import { ReactNode } from 'react';
import { ITooltipComponent } from './tooltip-component.interface';
import { IUseTooltipProps } from './use-tooltip-props.interface';
export interface ITooltipProps extends IUseTooltipProps, ITooltipComponent {
    /** &nbsp; */
    children: ReactNode;
    /** Конент в тултипе */
    label?: ReactNode;
}
