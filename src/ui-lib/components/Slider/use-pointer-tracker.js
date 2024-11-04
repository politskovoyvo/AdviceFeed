import { useRef, useCallback, useEffect } from 'react';
import { addDomEvent } from '../../utils/methods/add-dom-event.js';

function usePointerTracker(ref, options) {
    const { onStart, onMove, onEnd } = options;
    const eventsRef = useRef([]);
    const clearEvens = () => {
        eventsRef.current.forEach((removeEvent) => removeEvent());
        eventsRef.current = [];
    };
    const handlePointerEnd = useCallback((event) => {
        onEnd(event);
        clearEvens();
    }, [onEnd]);
    useEffect(() => {
        if (!ref.current)
            return;
        const onPointerDown = (event) => {
            onStart(event);
            eventsRef.current = [
                addDomEvent(window, 'pointermove', onMove),
                addDomEvent(window, 'pointercancel', handlePointerEnd),
                addDomEvent(window, 'pointerup', handlePointerEnd)
            ];
        };
        return addDomEvent(ref.current, 'pointerdown', onPointerDown);
    }, [handlePointerEnd, onEnd, onMove, onStart, ref]);
    useEffect(() => {
        return () => {
            clearEvens();
        };
    }, []);
}

export { usePointerTracker };
