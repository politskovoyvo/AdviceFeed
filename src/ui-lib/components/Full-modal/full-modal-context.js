import { createContext } from '../../utils/hooks/context.js';

const [FullModalProvider, useFullModalContext] = createContext({
    providerName: 'FullModalProvider',
    hookName: 'useFullModal'
});

export { FullModalProvider, useFullModalContext };
