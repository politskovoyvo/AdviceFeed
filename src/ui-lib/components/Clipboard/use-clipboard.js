import { useRef, useState, useCallback, useMemo } from 'react';
import { useDisclosure } from '../../utils/hooks/use-disclosure.js';
import { callAllHandlers } from '../../utils/methods/call-all-handlers.js';
import { keyEvent } from '../../utils/methods/key-event.js';
import 'react/jsx-runtime';
import '../../icons/application/loading.icon.js';
import '../../icons/suggested/check-fill.icon.js';
import '../../icons/suggested/cross.icon.js';
import '../../icons/suggested/exclamation-circle-fill.icon.js';
import '../Button/Button.js';
import '../Toast/toaster-provider.js';
import { useToast } from '../Toast/use-toast.js';

function useClipboard(props) {
    const { toCopyText = 'Скопировать', copiedText = 'Скопироавно!', data, ...rest } = props;
    const touchEvent = useRef(false);
    const toast = useToast();
    const [label, setLabel] = useState(toCopyText);
    const { isOpen, close, open } = useDisclosure();
    const copyData = useCallback((e) => {
        navigator.clipboard
            .writeText(data)
            .then(() => {
            if ('pointerType' in e && e.pointerType === 'touch') {
                toast({ description: copiedText, duration: 2000 });
            }
            else {
                setLabel(copiedText);
                setTimeout(() => close(), 2000);
            }
        })
            .catch(() => {
            toast({ status: 'error', title: 'Ошибка копирования' });
        });
    }, [close, copiedText, data, toast]);
    const onFocus = useCallback(() => {
        if (!touchEvent.current) {
            open();
        }
        touchEvent.current = false;
    }, [open]);
    const onPointerEnter = useCallback((e) => {
        if (e.pointerType === 'touch') {
            touchEvent.current = true;
            return;
        }
        open();
    }, [open]);
    const onEnterHandler = keyEvent(['Enter'], copyData);
    const onBlur = useCallback(() => {
        close();
    }, [close]);
    const tooltipProp = useMemo(() => ({
        isOpen,
        label,
        closeOnClick: false,
        close,
        open,
        afterLeave: () => setLabel(toCopyText)
    }), [close, isOpen, label, open, toCopyText]);
    const buttonProps = useMemo(() => ({
        ...rest,
        onPointerDown: callAllHandlers(rest.onPointerDown, copyData),
        onPointerEnter: callAllHandlers(rest.onPointerEnter, onPointerEnter),
        onFocus: callAllHandlers(rest.onFocus, onFocus),
        onBlur: callAllHandlers(rest.onBlur, onBlur),
        onKeyDown: callAllHandlers(rest.onKeyDown, onEnterHandler)
    }), [copyData, onBlur, onEnterHandler, onFocus, onPointerEnter, rest]);
    return {
        tooltipProp,
        buttonProps
    };
}

export { useClipboard };
