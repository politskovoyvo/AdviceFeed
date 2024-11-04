import { useState, useEffect } from 'react';
import { createContext } from '../../utils/hooks/context.js';
import { getLocalStorageValue, setLocalStorageValue } from '../../utils/methods/ui-kit-localstorage.js';

const [NavigationProvider, useNavigationContext] = createContext({
    providerName: 'NavigationProvider',
    hookName: 'useNavigationContext'
});
const [NavigationPopoverProvider, useNavigationPopoverContext] = createContext({
    providerName: 'NavigationPopoverProvider',
    hookName: 'useNavigationPopoverContext',
    required: false
});
const defaultOptions = {
    overlayClassName: ''
};
function useNavigationSettings(options = {}) {
    options = { ...defaultOptions, ...options };
    const settings = getLocalStorageValue('nav');
    const [visible, setVisible] = useState(false);
    const [opened, setOpened] = useState(settings?.opened ?? []);
    const [expanded, setExpanded] = useState(settings?.expanded ?? true);
    useEffect(() => {
        const actualSettings = getLocalStorageValue('nav') || {};
        setLocalStorageValue('nav', { ...actualSettings, expanded });
    }, [expanded]);
    useEffect(() => {
        const actualSettings = getLocalStorageValue('nav') || {};
        setLocalStorageValue('nav', { ...actualSettings, opened });
    }, [opened]);
    return {
        visible,
        expanded,
        opened,
        setOpened,
        setVisible,
        setExpanded,
        options
    };
}

export { NavigationPopoverProvider, NavigationProvider, useNavigationContext, useNavigationPopoverContext, useNavigationSettings };
