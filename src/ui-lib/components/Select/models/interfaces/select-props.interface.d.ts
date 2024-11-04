import { CSSProperties, RefObject } from 'react';
import { IPopoverProps } from '../../../Popover/models';
import { TSelectLabelProps } from '../types';
import { ISelectCommonProps } from './select-common-props.interface';
import { ISelectCoverageProps } from './select-coverage-props.interface';
import { ISelectDropdownProps } from './select-dropdown-props.interface';
import { ISelectSearchProps } from './select-search-props.interface';
import { ISelectValue } from './select-value-props.interface';
import { IUseSelectProps } from './use-select-props.interface';
export interface ISelectProps extends ISelectSearchProps, ISelectCommonProps, ISelectCoverageProps, ISelectValue, Partial<Pick<ISelectDropdownProps, 'maxOptionsOverflow' | 'resetButton' | 'innerStyle'>>, Omit<IUseSelectProps, 'disclosure'>, Omit<ISelectDropdownProps, 'fieldSize' | 'maxOptionsOverflow' | 'resetButton' | 'innerStyle'>, Pick<TSelectLabelProps, 'insideOverlay' | 'placeholder'>, Pick<IPopoverProps, 'strategy'> {
    dropdownClassName?: string;
    dropdownInnerStyle?: CSSProperties;
    wrapRef?: RefObject<HTMLElement>;
    open?: boolean;
    setOpen?(state: boolean): void;
}
