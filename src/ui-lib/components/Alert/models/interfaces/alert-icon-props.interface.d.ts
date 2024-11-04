import { ForwardRefExoticComponent, RefAttributes, SVGAttributes } from 'react';
export interface IAlertIconProps extends SVGAttributes<SVGSVGElement> {
    icon?: ForwardRefExoticComponent<SVGAttributes<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
}
