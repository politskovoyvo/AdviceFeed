import { createContext } from '../../utils/hooks/context.js';

const [SelectProvider, useSelectContext] = createContext({
    providerName: 'SelectProvider',
    hookName: 'useSelectContext'
});

export { SelectProvider, useSelectContext };
