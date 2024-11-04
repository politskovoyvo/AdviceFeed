import { createContext } from '../../utils/hooks/context.js';

const [TooltipProvider, useTooltipContext] = createContext({
    providerName: 'TooltipProvider',
    hookName: 'useTooltipContext'
});

export { TooltipProvider, useTooltipContext };
