import { HTMLAttributes } from 'react';
import { ISelectCommonProps, ISelectCoverageProps, ISelectValue } from '../interfaces';
import { TSelectSearchProps } from './select-search-props.type';
export type TSelectLabelProps = Required<ISelectCommonProps> & Pick<TSelectSearchProps, 'placeholder' | 'insideOverlay'> & ISelectValue & ISelectCoverageProps & HTMLAttributes<HTMLDivElement>;
