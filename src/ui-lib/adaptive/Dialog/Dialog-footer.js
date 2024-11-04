import { jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { DIALOG_FOOTER } from './consts/dialog-children.js';
import { useDialogContext } from './dialog-context.js';

const UIDialogFooter = (props) => {
    const { Component } = useDialogContext();
    const FooterComponent = useRef();
    const [_, update] = useState({});
    useEffect(() => {
        FooterComponent.current = DIALOG_FOOTER[Component.displayName];
        update({});
    }, [Component]);
    return FooterComponent.current ? jsx(FooterComponent.current, { ...props }) : jsx(Fragment, {});
};

export { UIDialogFooter };
