import { useDisclosure } from '../../utils/hooks/use-disclosure.js';

function useDrawerState(props) {
    return useDisclosure(props);
}

export { useDrawerState };
