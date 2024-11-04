import { TRadioButtonSize } from '../types';
import { IRadioProps } from './radio-props.interfaces';
export interface IRadioButtonProps extends Omit<IRadioProps, 'fieldSize'> {
    fieldSize?: TRadioButtonSize;
}
