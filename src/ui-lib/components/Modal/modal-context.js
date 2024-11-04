import { createContext } from '../../utils/hooks/context.js';

const [ModalProvider, useModalContext] = createContext({
    required: false,
    providerName: 'ModalProvider',
    hookName: 'useModalContext'
});

export { ModalProvider, useModalContext };
