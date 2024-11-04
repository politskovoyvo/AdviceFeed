import { jsx } from 'react/jsx-runtime';
import { runIfFn } from '../../utils/methods/run-if-fn.js';
import { ToastComponent } from './toast-component.js';
import { toastStore } from './toast-store.js';

function createRenderToast(options = {}) {
    const { render, toastComponent: Component = ToastComponent } = options;
    const renderToast = (props) => {
        if (typeof render === 'function') {
            return render({ ...props, ...options });
        }
        return jsx(Component, { ...props, ...options });
    };
    return renderToast;
}
function createToastFn(defaultOptions) {
    const normalizeToastOptions = (options) => ({
        ...defaultOptions,
        ...options,
        position: options?.position ?? defaultOptions?.position
    });
    const toast = (options) => {
        const normalizedToastOptions = normalizeToastOptions(options);
        const Message = createRenderToast(normalizedToastOptions);
        return toastStore.notify(Message, normalizedToastOptions);
    };
    toast.update = (id, options) => {
        toastStore.update(id, normalizeToastOptions(options));
    };
    toast.promise = (promise, options) => {
        const id = toast({
            ...options.loading,
            status: 'loading',
            duration: null
        });
        promise
            .then((data) => toast.update(id, {
            status: 'success',
            duration: 5000,
            ...runIfFn(options.success, data)
        }))
            .catch((error) => toast.update(id, {
            status: 'error',
            duration: 5000,
            ...runIfFn(options.error, error)
        }));
    };
    toast.closeAll = toastStore.closeAll;
    toast.close = toastStore.close;
    toast.isActive = toastStore.isActive;
    return toast;
}

export { createRenderToast, createToastFn };
