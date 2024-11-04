import { useTabs } from '../../use-tabs';
export type TUseTabsReturn = Omit<ReturnType<typeof useTabs>, 'htmlProps' | 'descendants'>;
