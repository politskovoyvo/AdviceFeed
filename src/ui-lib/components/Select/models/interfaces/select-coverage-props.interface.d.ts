import { ReactNode } from 'react';
import { ISelectValue } from './select-value-props.interface';
export interface ISelectCoverageProps extends ISelectValue {
    coveragePlaceholder?: string;
    coveragePostfix?: ReactNode;
    compress?: boolean;
}
