import { ICounterProps } from './counter-props.interface';
export interface IUseCounterProps extends Omit<ICounterProps, 'className' | 'fieldSize'> {
}
