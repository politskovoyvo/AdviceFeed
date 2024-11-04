import { createContext, useContext } from 'react';

const TabsContext = createContext(undefined);
function useTabsContext() {
    const context = useContext(TabsContext);
    if (!context) {
        throw Error('Нет TabsContext.Provider');
    }
    return context;
}
const TabPanelContext = createContext(undefined);
function useTabPanelContext() {
    const context = useContext(TabPanelContext);
    if (!context) {
        throw Error('Нет TabsPanelContext.Provider');
    }
    return context;
}

export { TabPanelContext, TabsContext, useTabPanelContext, useTabsContext };
