import { createContext } from '../../utils/hooks/context.js';

const [MobileDrawerProvider, useMobileDrawerContext] = createContext({
    providerName: 'MobileDrawerProvider',
    hookName: 'useMobileDrawerContext'
});

export { MobileDrawerProvider, useMobileDrawerContext };
