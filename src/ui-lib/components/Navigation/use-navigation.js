import { useUISettingsContext } from '../../settings/settings-context.js';
import 'react';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { addOverLay, removeOverlay } from '../../utils/methods/content-hidden.js';
import { useNavigationContext } from './Navigation-provider.js';

function useNavigation() {
    const id = uniqueId('navigation');
    const { visible, setVisible, expanded, setExpanded, opened, setOpened } = useNavigationContext();
    const { dialogs } = useUISettingsContext();
    const open = () => {
        addOverLay(id);
        setVisible(true);
        dialogs.hide();
    };
    const close = () => {
        removeOverlay(id);
        setVisible(false);
        dialogs.show();
    };
    const toggle = () => {
        if (visible) {
            close();
        }
        else {
            open();
        }
    };
    const rollUp = () => {
        setExpanded(false);
    };
    const expand = () => {
        setExpanded(true);
    };
    const toggleExpand = () => {
        if (expanded) {
            rollUp();
        }
        else {
            expand();
        }
    };
    const changeOpenedCategories = (indexes) => {
        setOpened(indexes);
    };
    return {
        open,
        close,
        toggle,
        rollUp,
        expand,
        toggleExpand,
        changeOpenedCategories,
        opened,
        visible,
        expanded
    };
}

export { useNavigation };
