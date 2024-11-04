import { useDisclosure } from '../utils/hooks/use-disclosure.js';

function useSettings() {
    const dialogsState = useDisclosure();
    const dialogs = {
        isHidden: dialogsState.isOpen,
        show: dialogsState.close,
        hide: dialogsState.open,
        toggle: dialogsState.toggle
    };
    return {
        dialogs
    };
}

export { useSettings };
