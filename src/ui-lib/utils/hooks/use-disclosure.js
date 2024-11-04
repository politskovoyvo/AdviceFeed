import { useState, useCallback } from 'react';
import { uniqueId } from '../methods/unique-id.js';
import { useCallbackRef } from './use-callback-ref.js';

function useDisclosure(props = {}) {
    const { close: onCloseProp, open: onOpenProp, isOpen: isOpenProp, id: idProp } = props;
    const handleOpen = useCallbackRef(onOpenProp);
    const handleClose = useCallbackRef(onCloseProp);
    const [isOpenState, setIsOpen] = useState(props.defaultIsOpen || false);
    const isOpen = isOpenProp !== undefined ? isOpenProp : isOpenState;
    const isControlled = isOpenProp !== undefined;
    const uid = uniqueId('disclosure');
    const id = idProp ?? uid;
    const close = useCallback(() => {
        if (!isControlled) {
            setIsOpen(false);
        }
        handleClose?.();
    }, [isControlled, handleClose]);
    const open = useCallback(() => {
        if (!isControlled) {
            setIsOpen(true);
        }
        handleOpen?.();
    }, [isControlled, handleOpen]);
    const toggle = useCallback(() => {
        if (isOpen) {
            close();
        }
        else {
            open();
        }
    }, [isOpen, open, close]);
    function getButtonProps(buttonProps = {}) {
        return {
            ...buttonProps,
            onClick(event) {
                buttonProps.onClick?.(event);
                toggle();
            }
        };
    }
    function getDisclosureProps(disclosureProps = {}) {
        return {
            ...disclosureProps,
            hidden: !isOpen,
            id
        };
    }
    return {
        isOpen,
        open,
        close,
        toggle,
        isControlled,
        getButtonProps,
        getDisclosureProps
    };
}

export { useDisclosure };
