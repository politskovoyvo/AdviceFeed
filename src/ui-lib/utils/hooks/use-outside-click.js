import { useRef, useEffect } from 'react';

function getOwnerDocument(node) {
    return node?.ownerDocument ?? document;
}
function isValidEvent(event, ref) {
    const target = event.target;
    if (target) {
        const doc = getOwnerDocument(target);
        if (!doc.contains(target))
            return false;
    }
    return !ref.current?.contains(target);
}
const useOutsideClick = (callback, refObject) => {
    const stateRef = useRef({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false
    });
    const state = stateRef.current;
    const ref = refObject ? refObject : useRef(null);
    useEffect(() => {
        const onPointerDown = (e) => {
            if (isValidEvent(e, ref)) {
                state.isPointerDown = true;
            }
        };
        const onMouseUp = (event) => {
            if (state.ignoreEmulatedMouseEvents) {
                state.ignoreEmulatedMouseEvents = false;
                return;
            }
            if (state.isPointerDown && isValidEvent(event, ref)) {
                state.isPointerDown = false;
                callback();
            }
        };
        const onTouchEnd = (event) => {
            state.ignoreEmulatedMouseEvents = true;
            if (state.isPointerDown && isValidEvent(event, ref)) {
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
    }, [ref]);
    return ref;
};

export { useOutsideClick };
