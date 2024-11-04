import { ReactNode } from 'react';
export interface INavigationProps {
    children: ReactNode;
    className?: string;
    /** Точка с которой навигация стновится блочным элементом, а не наложением fixed
     * @default (min-width: 768px) */
    blockBreakPoint?: string;
}
