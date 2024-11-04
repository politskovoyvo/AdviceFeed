import { HTMLAttributes, ReactElement } from 'react';
import { TSafeAny } from '../../../../utils/types';
import { TSwitchSize } from '../../../Switch/models';
import { TTwoWaySwitcherColor } from '../types';
import { IWayProps } from './way-props.interface';
export interface ITwoWaySwitcher extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'defaultValue'> {
    children: [ReactElement<IWayProps>, ReactElement<IWayProps>];
    /** @default primary */
    color?: TTwoWaySwitcherColor;
    /** @default medium */
    fieldSize?: TSwitchSize;
    /** @default false */
    disabled?: boolean;
    /** @default false */
    readOnly?: boolean;
    value?: TSafeAny;
    defaultValue?: TSafeAny;
    onChange?: (value: TSafeAny) => void;
}
