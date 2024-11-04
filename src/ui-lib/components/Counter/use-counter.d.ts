import { ChangeEvent } from 'react';
import { IUseCounterProps } from './models';
export type TUseCounterReturn = ReturnType<typeof useCounter>;
export declare function useCounter(props: IUseCounterProps): {
    inputProps: {
        ref: import("react").RefObject<HTMLInputElement>;
        name: string | undefined;
        disabled: boolean;
        readOnly: boolean;
        value: string | number;
        onBlur: () => void;
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    };
    disabledState: import("react").MutableRefObject<{
        increase: boolean;
        decrease: boolean;
    }>;
    increase: () => void;
    decrease: () => void;
};
