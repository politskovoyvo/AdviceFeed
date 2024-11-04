/// <reference types="react" />
import { IUseTabPanelContext, TUseTabsReturn } from './models';
export declare const TabsContext: import("react").Context<TUseTabsReturn | undefined>;
export declare function useTabsContext(): TUseTabsReturn;
export declare const TabPanelContext: import("react").Context<IUseTabPanelContext | undefined>;
export declare function useTabPanelContext(): IUseTabPanelContext;
