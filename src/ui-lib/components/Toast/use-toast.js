import { useMemo } from 'react';
import { createToastFn } from './toast-render.js';
import { ToastDefault } from './toaster-provider.js';

function useToast(options) {
    const defaultOptions = ToastDefault;
    return useMemo(() => createToastFn({
        ...defaultOptions,
        ...options
    }), [options, defaultOptions]);
}

export { useToast };
