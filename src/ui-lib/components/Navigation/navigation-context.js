import { createContext } from '../../utils/hooks/context.js';

const [NavigationContextProvider, useNavigationContext] = createContext({
    providerName: 'NavigationContextProvider',
    hookName: 'useNavigationContext'
});

export { NavigationContextProvider, useNavigationContext };
