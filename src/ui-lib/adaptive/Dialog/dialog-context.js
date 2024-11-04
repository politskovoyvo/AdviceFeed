import { createContext } from '../../utils/hooks/context.js';

const [DialogProvider, useDialogContext] = createContext({
    providerName: 'DialogProvider',
    hookName: 'useDialogContext'
});

export { DialogProvider, useDialogContext };
