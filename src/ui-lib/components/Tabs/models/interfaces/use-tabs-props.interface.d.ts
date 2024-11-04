import { LazyMode } from '../../../../utils/methods/lazy';
export interface IUseTabsProps {
    onChange?: (index: number) => void;
    index?: number;
    defaultIndex?: number;
    id?: string;
    isLazy?: boolean;
    lazyBehavior?: LazyMode;
}
