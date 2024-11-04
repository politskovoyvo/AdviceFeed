import { FactoryOpts } from 'imask/esm/masked/factory';
import { IInputProps } from './input-props.interface';
export interface IInputMaskProps extends Omit<IInputProps, 'onChange'> {
    mask: FactoryOpts;
    unmask?: boolean;
    onlyComplete?: boolean;
    onChange?(...event: any[]): void;
    onComplete?(value: string): void;
    className?: string;
    inputClassName?: string;
}
