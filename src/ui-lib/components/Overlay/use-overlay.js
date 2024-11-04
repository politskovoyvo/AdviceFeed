import eventListeners from '@popperjs/core/lib/modifiers/eventListeners';
import flip from '@popperjs/core/lib/modifiers/flip';
import offset from '@popperjs/core/lib/modifiers/offset';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import { createPopper } from '@popperjs/core/lib/popper-lite';
import { useRef, useCallback, useEffect } from 'react';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { getEventListenerOptions } from './utils.js';

function useOverlay(props = {}) {
    const { enabled = true, modifiers, placement = 'bottom-start', eventListeners: eventListenersProp = true, boundary = 'clippingParents', preventOverflow: preventOverflowProp = true, matchWidth, strategy = 'absolute', flip: flipProp = true, gutter = 4 } = props;
    const reference = useRef(null);
    const overlay = useRef(null);
    const instance = useRef(null);
    const cleanup = useRef(() => { });
    const setupOverlay = useCallback(() => {
        if (!enabled || !reference.current || !overlay.current)
            return;
        // Если экземпляр overlay существует, уничтожьте его, чтобы мы могли создать новый.
        cleanup.current?.();
        instance.current = createPopper(reference.current, overlay.current, {
            placement,
            strategy,
            modifiers: [
                flip,
                preventOverflow,
                offset,
                eventListeners,
                {
                    name: 'eventListeners',
                    ...getEventListenerOptions(eventListenersProp)
                },
                {
                    name: 'flip',
                    enabled: flipProp,
                    options: { padding: 8 }
                },
                {
                    name: 'offset',
                    options: {
                        offset: [0, gutter]
                    }
                },
                {
                    name: 'preventOverflow',
                    enabled: preventOverflowProp,
                    options: { boundary }
                },
                ...(modifiers ?? [])
            ]
        });
        // однократное принудительное обновление для устранения любых проблем с позиционированием
        instance.current.forceUpdate();
        cleanup.current = instance.current.destroy;
    }, [placement, enabled, modifiers, matchWidth, eventListeners, gutter, flip, preventOverflow, boundary]);
    useEffect(() => {
        return () => {
            if (!reference.current && !overlay.current) {
                instance.current?.destroy();
                instance.current = null;
            }
        };
    }, []);
    const referenceRef = useCallback((node) => {
        reference.current = node;
        setupOverlay();
    }, [setupOverlay]);
    const getReferenceProps = useCallback((refProps = {}, ref = null) => ({
        ...refProps,
        ref: mergeRefs(referenceRef, ref)
    }), [referenceRef]);
    const overlayRef = useCallback((node) => {
        overlay.current = node;
        setupOverlay();
    }, [setupOverlay]);
    const getOverlayProps = useCallback((overlayProps = {}, ref = null) => ({
        ...overlayProps,
        ref: mergeRefs(overlayRef, ref),
        style: {
            ...overlayProps.style,
            position: 'absolute',
            minWidth: matchWidth ? undefined : 'max-content'
        }
    }), [overlayRef, matchWidth]);
    return {
        getOverlayProps,
        getReferenceProps,
        overlayRef,
        referenceRef,
        update() {
            instance.current?.update();
        },
        forceUpdate() {
            instance.current?.forceUpdate();
        }
    };
}

export { useOverlay };
