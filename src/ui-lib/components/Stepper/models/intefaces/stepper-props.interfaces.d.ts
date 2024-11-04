import { ReactNode } from 'react';
import { TStepOrientation, TStepSize } from '../types';
export interface IStepperProps {
    index: number;
    children: ReactNode;
    orientation?: TStepOrientation;
    size?: TStepSize;
    statusComplete?: ReactNode;
    statusIncomplete?: ReactNode;
    statusActive?: ReactNode;
}
