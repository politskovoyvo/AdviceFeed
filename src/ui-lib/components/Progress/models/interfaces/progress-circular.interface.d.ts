import { ReactNode } from 'react';
export interface IProgressCircular {
    progress: number;
    children?: ReactNode;
    max?: number;
    hasProgressNumber?: boolean;
    className?: string;
    classNameLabel?: string;
    colorTrack?: string;
    colorFilledTrack?: string;
    trackWidth?: number;
}
