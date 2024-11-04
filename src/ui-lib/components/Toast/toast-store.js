import { createRenderToast } from './toast-render.js';
import { findToast, getToastPosition } from './toast.utils.js';

const initStoreState = {
    'bottom-left': [],
    'bottom-right': [],
    'top-left': [],
    'top-right': [],
    'bottom-center': [],
    'top-center': []
};
// eslint-disable-next-line @typescript-eslint/no-use-before-define
const toastStore = createStore(initStoreState);
function createStore(initState) {
    let state = initState;
    const listeners = new Set();
    const setState = (setStateFn) => {
        state = setStateFn(state);
        listeners.forEach((l) => l());
    };
    const store = {
        close: (id) => {
            setState((prevState) => {
                const position = getToastPosition(prevState, id);
                if (!position)
                    return prevState;
                return {
                    ...prevState,
                    [position]: prevState[position].map((toast) => {
                        if (toast.id === id) {
                            return {
                                ...toast,
                                requestClose: true
                            };
                        }
                        return toast;
                    })
                };
            });
        },
        closeAll: ({ positions } = {}) => {
            setState((prev) => {
                const allPositions = ['bottom-center', 'bottom-right', 'bottom-left', 'top-center', 'top-left', 'top-right'];
                const positionsToClose = positions ?? allPositions;
                return positionsToClose.reduce((acc, position) => {
                    acc[position] = prev[position].map((toast) => ({ ...toast, requestClose: true }));
                    return acc;
                }, { ...prev });
            });
        },
        getState: () => state,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        isActive: (id) => Boolean(findToast(toastStore.getState(), id).position),
        notify: (message, options) => {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            const toast = createToast(message, options);
            const { position, id } = toast;
            setState((prevToasts) => {
                const isTop = position.includes('top');
                const toasts = isTop ? [toast, ...(prevToasts[position] ?? [])] : [...(prevToasts[position] ?? []), toast];
                return {
                    ...prevToasts,
                    [position]: toasts
                };
            });
            return id;
        },
        removeToast: (id, position) => {
            setState((prevState) => ({
                ...prevState,
                [position]: prevState[position].filter((toast) => toast.id !== id)
            }));
        },
        subscribe: (listener) => {
            listeners.add(listener);
            return () => {
                setState(() => initState);
                listeners.delete(listener);
            };
        },
        update: (id, options) => {
            if (!id)
                return;
            setState((prevState) => {
                const nextState = { ...prevState };
                const { position, index } = findToast(nextState, id);
                if (position && index !== -1) {
                    nextState[position][index] = {
                        ...nextState[position][index],
                        ...options,
                        message: createRenderToast(options)
                    };
                }
                return nextState;
            });
        }
    };
    return store;
}
let counter = 0;
function createToast(message, options = {}) {
    counter += 1;
    const id = options.id ?? counter;
    const position = options.position ?? 'top-right';
    return {
        id,
        message,
        position,
        duration: options.duration,
        onClosed: options.onClosed,
        onRequestRemove: () => toastStore.removeToast(String(id), position),
        status: options.status,
        requestClose: false
    };
}

export { toastStore };
