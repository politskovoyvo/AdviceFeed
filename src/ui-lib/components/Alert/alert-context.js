import { createContext } from '../../utils/hooks/context.js';

const [AlertProvider, useAlertContext] = createContext({
    providerName: 'AlertProvider',
    hookName: 'useAlertContext'
});

export { AlertProvider, useAlertContext };
