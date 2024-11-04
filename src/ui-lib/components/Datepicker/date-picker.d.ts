/// <reference types="react" />
import { IInputMaskProps } from '../Input/models';
import { IDatePickerProps } from './models';
export declare const UIDatePicker: import("react").ForwardRefExoticComponent<IDatePickerProps & Omit<IInputMaskProps, "mask" | "value" | "mainRef"> & import("react").RefAttributes<HTMLInputElement>>;
