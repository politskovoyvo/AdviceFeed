import { INavigationItemContentProps } from './navigation-item-content-props.interface';
export interface INavigationCategoryProps extends Omit<INavigationItemContentProps, 'minimalize'> {
    className?: string;
    title?: string;
}
