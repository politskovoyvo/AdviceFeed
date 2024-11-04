import { createContext, useContext } from 'react';

const ConfigContext = createContext(null);
function useConfigContext() {
    const context = useContext(ConfigContext);
    if (!context) {
        throw Error('Нет ConfigContext.Provider');
    }
    return context;
}

export { ConfigContext, useConfigContext };
