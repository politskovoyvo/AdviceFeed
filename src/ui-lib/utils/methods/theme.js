import { getLocalStorageValue, setLocalStorageValue } from './ui-kit-localstorage.js';

let theme = 'light';
const darkModeMedia = window.matchMedia('(prefers-color-scheme: dark)');
const reflectPreference = () => {
    document.documentElement.classList.add(theme);
    document.documentElement.setAttribute('theme', getLocalStorageValue('theme') ?? theme);
    document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
};
const getColorPreference = () => {
    const storeTheme = getLocalStorageValue('theme');
    if (storeTheme)
        return storeTheme;
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};
const setPreference = () => {
    setLocalStorageValue('theme', theme);
    reflectPreference();
};
const toggleTheme = () => {
    theme = theme === 'light' ? 'dark' : 'light';
    setPreference();
};
const listenTheme = () => {
    darkModeMedia.addEventListener('change', ({ matches: isDark }) => {
        theme = isDark ? 'dark' : 'light';
        setPreference();
    });
};
const initTheme = (fixedTheme) => {
    const storeTheme = getLocalStorageValue('theme');
    if (fixedTheme) {
        theme = fixedTheme;
        setPreference();
        return;
    }
    if (storeTheme === 'dark' || (!storeTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        theme = 'dark';
    }
    else {
        theme = 'light';
    }
    setPreference();
    listenTheme();
};

export { getColorPreference, initTheme, setPreference, toggleTheme };
