import { useCallback, useEffect } from 'react';
import { useOutsideClick } from '../../utils/hooks/use-outside-click.js';
import { addOverLay, removeOverlay } from '../../utils/methods/content-hidden.js';
import { keyEvent } from '../../utils/methods/key-event.js';
import { uniqueId } from '../../utils/methods/unique-id.js';

function useModal(prop) {
    const { isOpen, closable = true, overlayClosable = true, overlayExist = true, close, safe } = prop;
    const id = uniqueId('modal');
    const handleClose = useCallback(() => {
        if (closable) {
            close();
        }
    }, [closable, close]);
    const handleOutSide = () => {
        if (!overlayExist) {
            handleClose();
        }
    };
    const refModal = useOutsideClick(handleOutSide);
    const handle = useCallback(keyEvent(['Escape'], (e) => {
        e.stopPropagation();
        handleClose();
    }), [handleClose]);
    useEffect(() => {
        if (isOpen) {
            addOverLay(id);
            document.addEventListener('keydown', handle, true);
        }
        else {
            document.removeEventListener('keydown', handle, true);
            removeOverlay(id);
        }
    }, [isOpen]);
    useEffect(() => {
        return () => {
            document.removeEventListener('keydown', handle);
            removeOverlay(id);
        };
    }, []);
    return { isOpen, closable, overlayClosable, overlayExist, close, refModal, handleClose, id, safe };
}

export { useModal };
