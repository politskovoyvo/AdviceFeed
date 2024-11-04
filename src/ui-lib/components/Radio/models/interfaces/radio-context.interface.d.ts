import { ChangeEvent } from 'react';
import { TRadioValue } from '../types';
export interface IRadioContext {
    name: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: TRadioValue | null;
}
