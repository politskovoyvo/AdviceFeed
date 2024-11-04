import { ReactNode } from 'react';
import { TStepOrientation, TStepSize, TStepStatus } from '../types';
export interface IStepContext {
    status: TStepStatus;
    count: number;
    index: number;
    orientation: TStepOrientation;
    isFirst: boolean;
    isLast: boolean;
    fieldSize: TStepSize;
    statusComplete: ReactNode;
    statusIncomplete: ReactNode;
    statusActive: ReactNode;
}
