import { createContext } from '../../utils/hooks/context.js';

const [DrawerProvider, useDrawerContext] = createContext({
    providerName: 'DrawerProvider',
    hookName: 'useDrawerContext'
});

export { DrawerProvider, useDrawerContext };
