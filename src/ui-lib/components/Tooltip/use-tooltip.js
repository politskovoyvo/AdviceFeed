import { useRef, useCallback, useEffect } from 'react';
import { useDisclosure } from '../../utils/hooks/use-disclosure.js';
import { useEventListener } from '../../utils/hooks/use-event-listener.js';
import { callAllHandlers } from '../../utils/methods/call-all-handlers.js';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { useOverlay } from '../Overlay/use-overlay.js';
import { OverlayTransitions } from '../Overlay/tailwind-variations/overlay-transition.js';

function useTooltip(props) {
    const { isOpen: isOpenProp, open: openProp, close: closeProp, defaultIsOpen, closeDelay = 100, openDelay = 100, placement = 'top', isDisabled = false, closeOnClick = true, gutter = 4, modifiers, id = uniqueId('tooltip'), strategy, afterEnter, afterLeave, beforeEnter, beforeLeave, ...htmlProps } = props;
    const { isOpen, open, close } = useDisclosure({
        isOpen: isOpenProp,
        defaultIsOpen,
        open: openProp,
        close: closeProp
    });
    const { referenceRef, getOverlayProps, forceUpdate } = useOverlay({
        enabled: isOpen,
        placement,
        modifiers,
        gutter,
        strategy
    });
    const ref = useRef(null);
    // Избегаем проблем, когда после нажатия на элемент с фокусом вызывает метод фокуса
    // Сам метод не убираем, так как нужна работа с клавиатуры
    const touchEvent = useRef(false);
    const openTimeout = useRef();
    const closeTimeout = useRef();
    const openTooltip = useCallback(() => {
        if (isDisabled)
            return;
        openTimeout.current = window.setTimeout(open, openDelay);
    }, [isDisabled, closeDelay]);
    const closeTooltip = useCallback(() => {
        closeTimeout.current = window.setTimeout(close, closeDelay);
    }, [closeDelay]);
    const onPointerDown = useCallback(() => {
        if (closeOnClick && isOpen) {
            closeTooltip();
        }
    }, [closeTooltip, closeOnClick, isOpen]);
    const onClick = useCallback(() => {
        if (closeOnClick && isOpen) {
            closeTooltip();
        }
    }, [closeTooltip, closeOnClick, isOpen]);
    useEffect(() => {
        return () => {
            if (openTimeout.current) {
                clearTimeout(openTimeout.current);
            }
            if (closeTimeout.current) {
                clearTimeout(closeTimeout.current);
            }
        };
    }, []);
    useEventListener(() => ref.current, 'pointerleave', closeTooltip);
    const getTriggerProps = useCallback((_props = {}, _ref = null) => {
        return {
            ..._props,
            ref: mergeRefs(ref, _ref, referenceRef),
            onPointerEnter: callAllHandlers(_props.onPointerEnter, (e) => {
                if (e.pointerType === 'touch') {
                    touchEvent.current = true;
                    return;
                }
                openTooltip();
            }),
            onClick: callAllHandlers(_props.onClick, onClick),
            onPointerDown: callAllHandlers(_props.onPointerDown, onPointerDown),
            onFocus: callAllHandlers(_props.onFocus, () => {
                if (!touchEvent.current) {
                    openTooltip();
                }
                touchEvent.current = false;
            }),
            onBlur: callAllHandlers(_props.onBlur, closeTooltip)
        };
    }, [openTooltip, closeTooltip, onPointerDown, isOpen, id, onClick, referenceRef]);
    const getTooltipPositionerProps = useCallback((_props = {}, forwardedRef = null) => getOverlayProps({
        ..._props,
        style: {
            zIndex: 10,
            ..._props.style
        }
    }, forwardedRef), [getOverlayProps]);
    const getTransitionProps = useCallback(() => ({
        show: isOpen,
        beforeEnter: () => {
            forceUpdate();
            beforeEnter?.();
        },
        afterLeave,
        beforeLeave,
        afterEnter
    }), [afterEnter, afterLeave, beforeEnter, beforeLeave, forceUpdate, isOpen]);
    const getTooltipProps = useCallback((_props = {}, _ref = null) => {
        return {
            _ref,
            ...htmlProps,
            ..._props,
            className: `${OverlayTransitions[props.placement ?? 'top']} ${_props.className}`,
            id,
            role: 'tooltip'
        };
    }, [htmlProps, id, props.placement]);
    return {
        isOpen,
        open: openTooltip,
        close: closeTooltip,
        getTransitionProps,
        getTriggerProps,
        getTooltipProps,
        getTooltipPositionerProps
    };
}

export { useTooltip };
