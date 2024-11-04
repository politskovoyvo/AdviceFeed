import { HTMLAttributes } from 'react';
import { IInputProps } from '../../../Input';
export type TCharInputTypeMode = 'text' | 'numeric';
export interface ICharInputProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>, Pick<IInputProps, 'fieldSize' | 'theme'> {
    value?: string;
    defaultValue?: string;
    onChange?(value: string): void;
    onComplete?(value: string): void;
    placeholder?: string;
    /** @default false */
    invalid?: boolean;
    /** @default false */
    disabled?: boolean;
    /** @default false */
    readOnly?: boolean;
    /** На ините фокус на первом инпуте
     *  @default false */
    autoFucus?: boolean;
    /** Влияет на клавиатуру для ручного ввода, а также какую валидацию проводить
     *
     * numeric - только числа
     *
     * text - числа и буквы
     * @default numeric */
    inputMode?: TCharInputTypeMode;
    /**
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#sect30
     * @default false
     * */
    otp?: boolean;
}
