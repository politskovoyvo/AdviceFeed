/// <reference types="react" />
import { IScenarioPanelContext } from './models';
import { TUseScenariosComponent } from './use-scenarios';
export declare const ScenarioContext: import("react").Context<TUseScenariosComponent | undefined>;
export declare function useScenarioContext(): TUseScenariosComponent;
export declare const ScenarioPanelContext: import("react").Context<IScenarioPanelContext>;
export declare function useScenarioPanelContext(): IScenarioPanelContext;
