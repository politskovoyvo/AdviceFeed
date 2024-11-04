import { useEffect } from 'react';
import { useCallbackRef } from './use-callback-ref.js';

/**
 * React hook that provides a declarative `setTimeout`
 *
 * @param callback the callback to run after specified delay
 * @param delay the delay (in ms)
 */
function useTimeout(callback, delay) {
    const fn = useCallbackRef(callback);
    useEffect(() => {
        if (delay == null)
            return undefined;
        let timeoutId = null;
        timeoutId = window.setTimeout(() => {
            fn();
        }, delay);
        return () => {
            if (timeoutId) {
                window.clearTimeout(timeoutId);
            }
        };
    }, [delay, fn]);
}

export { useTimeout };
