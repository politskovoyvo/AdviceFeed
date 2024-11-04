import { InputHTMLAttributes } from 'react';
import { IPopoverProps } from '../../../Popover/models';
import { PhoneInputSizesType, PhoneInputType } from '../types';
import { ECountries } from '../../../../utils/enums/countries';
export interface IPhoneCountryProps extends InputHTMLAttributes<HTMLInputElement>, Pick<IPopoverProps, 'strategy'> {
    theme?: PhoneInputType;
    fieldSize?: PhoneInputSizesType;
    wrapClassName?: string;
    countries?: ECountries[];
}
