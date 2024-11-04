import { createToastFn } from './toast-render.js';
import { ToastDefault } from './toaster-provider.js';

class ToastService {
    toast;
    constructor(options) {
        this.toast = createToastFn({
            ...ToastDefault,
            ...options
        });
    }
    open(options) {
        return this.toast(options);
    }
}

export { ToastService };
