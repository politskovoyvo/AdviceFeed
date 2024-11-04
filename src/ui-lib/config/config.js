import { initAnimation } from '../utils/methods/animations.js';
import { initHideUiRoot } from '../utils/methods/content-hidden.js';
import { HeightListen } from '../utils/methods/height-listen.js';
import { initTheme } from '../utils/methods/theme.js';
import { initUiContainer } from '../utils/methods/ui-root-container.js';

const defaultConfig = {
    root: {
        id: 'root'
    },
    Link: {
        component: 'a'
    },
    LinkNavigation: {
        component: 'a'
    },
    safeZone: { top: 'top-0', bottom: 'bottom-0', left: 'left-0', right: 'right-0' }
};
function initUi(config) {
    initUiContainer();
    initHideUiRoot(config.root.id);
    initTheme(config.fixedTheme);
    initAnimation(config.animation);
    HeightListen();
}
function uiConfig(config) {
    const filledConfig = { ...defaultConfig, ...config, safeZone: { ...defaultConfig.safeZone, ...config?.safeZone } };
    initUi(filledConfig);
    return filledConfig;
}

export { initUi, uiConfig };
