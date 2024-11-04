import { useRef, useEffect } from 'react';

function getOwnerDocument(node) {
    return node?.ownerDocument ?? document;
}
function isValidEvent(event, parentRef, ref) {
    if (!ref.current || !parentRef.current) {
        return false;
    }
    const target = event.target;
    if (target) {
        const doc = getOwnerDocument(target);
        if (!doc.contains(target))
            return false;
    }
    return !ref.current?.contains(target) && !parentRef.current?.contains(target);
}
const useOutsideParentClick = (config) => {
    const { callback, isIgnoreTouches = false, parent, enabled, refObject } = config;
    const ref = refObject ? refObject : useRef(null);
    const stateRef = useRef({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false
    });
    const state = stateRef.current;
    useEffect(() => {
        if (!enabled)
            return;
        const onPointerDown = (e) => {
            const skip = window.innerWidth <= 768 && isIgnoreTouches;
            if (!skip && isValidEvent(e, parent, ref)) {
                state.isPointerDown = true;
            }
        };
        const onMouseUp = (event) => {
            if (state.ignoreEmulatedMouseEvents) {
                state.ignoreEmulatedMouseEvents = false;
                return;
            }
            if (state.isPointerDown && isValidEvent(event, parent, ref)) {
                state.isPointerDown = false;
                callback();
            }
        };
        const onTouchEnd = (event) => {
            state.ignoreEmulatedMouseEvents = true;
            if (state.isPointerDown && isValidEvent(event, parent, ref)) {
                state.isPointerDown = false;
                callback();
            }
        };
        const doc = getOwnerDocument(ref.current);
        doc.addEventListener('mousedown', onPointerDown, true);
        doc.addEventListener('mouseup', onMouseUp, true);
        doc.addEventListener('touchstart', onPointerDown, true);
        doc.addEventListener('touchend', onTouchEnd, true);
        return () => {
            doc.removeEventListener('mousedown', onPointerDown, true);
            doc.removeEventListener('mouseup', onMouseUp, true);
            doc.removeEventListener('touchstart', onPointerDown, true);
            doc.removeEventListener('touchend', onTouchEnd, true);
        };
    }, [enabled, ref, parent, callback]);
    return ref;
};

export { useOutsideParentClick };
