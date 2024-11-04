import { useRef, useEffect, useCallback } from 'react';

function useCallbackRef(fn, deps = []) {
    const ref = useRef(fn);
    useEffect(() => {
        ref.current = fn;
    });
    return useCallback(((...args) => ref.current?.(...args)), deps);
}

export { useCallbackRef };
