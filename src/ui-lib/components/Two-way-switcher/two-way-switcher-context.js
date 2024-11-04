import { createContext } from '../../utils/hooks/context.js';

const [TwoWaySwitcherProvider, useTwoWaySwitcherContext] = createContext({
    providerName: 'TwoWaySwitcherProvider',
    hookName: 'useTwoWaySwitcherContext'
});
const [WayProvider, useWayContext] = createContext({
    providerName: 'WayProvider',
    hookName: 'useWayContext'
});

export { TwoWaySwitcherProvider, WayProvider, useTwoWaySwitcherContext, useWayContext };
