import { useState, useEffect } from 'react';
import { UIMobileDrawer } from '../../components/Mobile-drawer/Mobile-drawer.js';
import '../../components/Mobile-drawer/Mobile-drawer-content.js';
import '../../components/Mobile-drawer/mobile-drawer-context.js';
import '../../components/Mobile-drawer/Mobile-drawer-footer.js';
import '../../components/Mobile-drawer/Mobile-drawer-header.js';
import { UIModal } from '../../components/Modal/Modal.js';
import '../../components/Modal/Modal-content.js';
import '../../components/Modal/modal-context.js';
import '../../components/Modal/Modal-footer.js';
import '../../components/Modal/Modal-header.js';
import { MediaScreens } from '../../utils/consts/media-screens.js';
import { useMediaQuery } from '../../utils/hooks/use-media-query.js';

function useDialog(props) {
    const { as = UIMobileDrawer, as640, as768 = UIModal, as1024, as1280, as1536, ...componentProps } = props;
    const [isSm, isMd, isLg, isXl, is2xl] = useMediaQuery([
        MediaScreens.sm,
        MediaScreens.md,
        MediaScreens.lg,
        MediaScreens.xl,
        MediaScreens['2xl']
    ]);
    const [Component, setComponent] = useState(UIModal);
    useEffect(() => {
        let component = as;
        if (as1536 !== undefined && is2xl)
            component = as1536;
        else if (as1280 !== undefined && isXl)
            component = as1280;
        else if (as1024 !== undefined && isLg)
            component = as1024;
        else if (as768 !== undefined && isMd)
            component = as768;
        else if (as640 !== undefined && isSm)
            component = as640;
        if (Component !== component) {
            setComponent(component);
        }
    }, [isSm, isMd, isLg, isXl, is2xl]);
    return {
        Component,
        componentProps
    };
}

export { useDialog };
