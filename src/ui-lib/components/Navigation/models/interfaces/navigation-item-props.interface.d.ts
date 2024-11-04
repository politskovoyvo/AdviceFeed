import { TSafeAny } from '../../../../utils/types';
import { INavigationItemContentProps } from './navigation-item-content-props.interface';
export interface INavigationItemProps extends INavigationItemContentProps {
    to?: string;
    onClick?: (value: TSafeAny) => void;
    value?: TSafeAny;
}
