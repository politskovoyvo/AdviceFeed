import { ChangeEvent } from 'react';
import { IUseRadioProps } from './models';
export declare function useRadio(props: IUseRadioProps): {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    value: import("./models").TRadioValue | undefined;
    children?: import("react").ReactNode;
    fieldSize?: "medium" | undefined;
    theme?: "primary" | undefined;
    disabled?: boolean | undefined;
    id?: string | undefined;
    className?: string | undefined;
};
