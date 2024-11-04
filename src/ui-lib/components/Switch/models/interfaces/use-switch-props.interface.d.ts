import { ISwitchProps } from './switch-props.interface';
export interface IUseSwitchProps extends Omit<ISwitchProps, 'fieldSize' | 'color' | 'className' | 'label'> {
}
