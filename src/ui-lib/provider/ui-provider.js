import { jsxs, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { useNavigationSettings, NavigationProvider } from '../components/Navigation/Navigation-provider.js';
import { ToastOptionProvider, ToastProvider } from '../components/Toast/toaster-provider.js';
import '../utils/methods/animations.js';
import '../utils/methods/theme.js';
import { ConfigContext } from '../config/config-provider.js';
import { SettingsProvider } from '../settings/settings-context.js';
import { useSettings } from '../settings/use-settings.js';

const UIProvider = ({ children, toastOptions, navigationOptions, config }) => {
    const navigationSettings = useNavigationSettings(navigationOptions);
    const navContext = useMemo(() => navigationSettings, [navigationSettings]);
    const configContext = useMemo(() => config, [config]);
    const settings = useSettings();
    return (jsxs(ConfigContext.Provider, { value: configContext, children: [jsx(SettingsProvider, { value: settings, children: jsx(NavigationProvider, { value: navContext, children: children }) }), jsx(ToastOptionProvider.Provider, { value: { defaultOptions: toastOptions }, children: jsx(ToastProvider, {}) })] }));
};

export { UIProvider };
