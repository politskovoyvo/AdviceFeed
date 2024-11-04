import { createContext } from '../utils/hooks/context.js';

const [SettingsProvider, useUISettingsContext] = createContext({
    providerName: 'SettingsProvider',
    hookName: 'useUISettingsContext'
});

export { SettingsProvider, useUISettingsContext };
