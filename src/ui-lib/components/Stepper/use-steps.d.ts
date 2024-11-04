/// <reference types="react" />
import { IUseStepsProps, TStepStatus } from './models';
export declare function useSteps({ index, count }: IUseStepsProps): {
    activeStep: number;
    setActiveStep: import("react").Dispatch<import("react").SetStateAction<number>>;
    activePercent: number;
    isActiveStep(step: number): boolean;
    isCompleteStep(step: number): boolean;
    isIncompleteStep(step: number): boolean;
    getStatus(step: number): TStepStatus;
    next(): void;
    previous(): void;
};
export type TUseSteps = ReturnType<typeof useSteps>;
