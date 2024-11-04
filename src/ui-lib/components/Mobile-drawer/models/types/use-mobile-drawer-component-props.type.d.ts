import { TMobileDrawerComponentProps } from './mobile-drawer-component-props.type';
export type TUseMobileDrawerComponentProps = Omit<TMobileDrawerComponentProps, 'children' | 'className' | 'noneStyles'>;
