import { Dispatch, HTMLAttributes, SetStateAction } from 'react';
import { LazyMode } from '../../../../utils/methods/lazy';
import { TScenariosOrientation } from '../types';
export interface IUseScenariosComponentProps extends HTMLAttributes<HTMLDivElement> {
    binding: {
        activeScenario: number;
        previousIndex: number;
        setActiveScenario: Dispatch<SetStateAction<number>>;
        setIsComplete: Dispatch<SetStateAction<boolean>>;
    };
    orientation?: TScenariosOrientation;
    isLazy?: boolean;
    lazyMode?: LazyMode;
}
