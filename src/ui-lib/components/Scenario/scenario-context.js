import { createContext, useContext } from 'react';

const ScenarioContext = createContext(undefined);
function useScenarioContext() {
    const context = useContext(ScenarioContext);
    if (!context) {
        throw Error('Нет ScenarioContext.Provider');
    }
    return context;
}
const ScenarioPanelContext = createContext({
    id: '',
    isSelected: false,
    selectedIndex: 0,
    index: 0,
    stepId: ''
});
function useScenarioPanelContext() {
    const context = useContext(ScenarioPanelContext);
    if (!context) {
        throw Error('Нет ScenarioPanelContext.Provider');
    }
    return context;
}

export { ScenarioContext, ScenarioPanelContext, useScenarioContext, useScenarioPanelContext };
