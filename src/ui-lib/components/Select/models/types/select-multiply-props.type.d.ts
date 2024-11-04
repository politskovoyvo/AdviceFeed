import { ISelectCommonProps } from '../interfaces';
import { TSelectLabelProps } from './select-label-props.type';
export type TSelectMultiplyProps = Required<ISelectCommonProps> & Pick<TSelectLabelProps, 'placeholder'>;
