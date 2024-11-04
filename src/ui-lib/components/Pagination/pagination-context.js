import { createContext } from '../../utils/hooks/context.js';

const [PaginationProvider, usePaginationContext] = createContext({
    providerName: 'PaginationProvider',
    hookName: 'usePaginationContext'
});

export { PaginationProvider, usePaginationContext };
