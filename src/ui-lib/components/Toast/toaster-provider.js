import { jsx } from 'react/jsx-runtime';
import { createContext, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import '../../utils/methods/animations.js';
import '../../utils/methods/theme.js';
import { CONTAINER_ID } from '../../utils/methods/ui-root-container.js';
import { useConfigContext } from '../../config/config-provider.js';
import { ToastSafeContainerKeys, ToastContainerPosition } from './tailwind-variations/taost-container.js';
import { UIToast } from './toast.js';
import { toastStore } from './toast-store.js';

const ToastDefault = {
    duration: 5000
};
const ToastOptionProvider = createContext({
    defaultOptions: ToastDefault
});
const ToasterGenerator = ({ children }) => {
    const uiContainer = document.getElementById(CONTAINER_ID);
    return createPortal(children, uiContainer);
};
const ToastProvider = (props) => {
    const { component: Component = UIToast } = props;
    const { safeZone } = useConfigContext();
    const state = useSyncExternalStore(toastStore.subscribe, toastStore.getState, toastStore.getState);
    const stateKeys = Object.keys(state);
    const toastList = stateKeys.map((position) => {
        const toasts = state[position];
        const safeZoneClassNames = ToastSafeContainerKeys[position].map((key) => safeZone[key]).join(' ');
        return (jsx("div", { role: "region", "aria-live": "polite", className: `flex flex-col md:fixed md:p-3 ${safeZoneClassNames} ${ToastContainerPosition[position]}`, children: toasts.map((toast) => (jsx(Component, { ...toast }, toast.id))) }, position));
    });
    return (jsx(ToasterGenerator, { children: jsx("div", { className: 'pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-50 mt-3 flex flex-col items-center md:mt-0', children: toastList }) }));
};

export { ToastDefault, ToastOptionProvider, ToastProvider, ToasterGenerator };
