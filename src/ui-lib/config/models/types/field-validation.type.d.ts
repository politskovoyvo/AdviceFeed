import { IFieldValidation } from '../interfaces';
export type TFieldValidation<T> = (errors: T, props: {
    name?: string;
}) => IFieldValidation | undefined;
