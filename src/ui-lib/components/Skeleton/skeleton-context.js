import { createContext } from '../../utils/hooks/context.js';

const [UISkeletonProvider, useSkeletonContext] = createContext({
    providerName: 'UISkeletonProvider',
    hookName: 'useSkeletonContext',
    required: false
});

export { UISkeletonProvider, useSkeletonContext };
