import { useState } from 'react';
import { createPortal } from 'react-dom';
import { CONTAINER_ID } from '../../utils/methods/ui-root-container.js';
import { useSafeLayoutEffect } from '../Descendants/utils.js';

const UIPortal = (props) => {
    const { children, container = document.getElementById(CONTAINER_ID) } = props;
    const host = container ?? (typeof window !== 'undefined' ? document.body : undefined);
    const [, forceUpdate] = useState({});
    useSafeLayoutEffect(() => forceUpdate({}), []);
    if (host && children) {
        return createPortal(children, host);
    }
    return null;
};

export { UIPortal };
