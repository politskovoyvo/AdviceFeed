import { createContext } from '../../utils/hooks/context.js';

const [PopoverProvider, usePopoverContext] = createContext({
    providerName: 'PopoverProvider',
    hookName: 'usePopoverContext',
    required: false
});

export { PopoverProvider, usePopoverContext };
