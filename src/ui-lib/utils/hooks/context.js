import { createContext as createContext$1, useContext } from 'react';

function getErrorMessage(hook, provider) {
    return `Не вижу ${provider}. ${hook} вернул undefined`;
}
function createContext(options = {}) {
    const { name, required = true, hookName = 'useContext', providerName = 'Provider', errorMessage, defaultValue } = options;
    const createdContext = createContext$1(defaultValue);
    createdContext.displayName = name;
    function useContext$1() {
        const context = useContext(createdContext);
        if (!context && required) {
            const error = new Error(errorMessage ?? getErrorMessage(hookName, providerName));
            error.name = 'ContextError';
            Error.captureStackTrace?.(error, useContext$1);
            throw error;
        }
        return context;
    }
    return [createdContext.Provider, useContext$1, createdContext];
}

export { createContext };
