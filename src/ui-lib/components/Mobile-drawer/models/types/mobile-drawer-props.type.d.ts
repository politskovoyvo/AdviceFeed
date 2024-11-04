import { TUseMobileDrawerReturn } from '../../use-mobile-drawer';
export type TMobileDrawerProps = Omit<TUseMobileDrawerReturn, 'modifiers' | 'sensors' | 'handleDragEnd' | 'handleDragMove' | 'handleDragStart'>;
