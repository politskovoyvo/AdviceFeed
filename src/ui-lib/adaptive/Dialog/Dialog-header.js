import { jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { DIALOG_HEADER } from './consts/dialog-children.js';
import { useDialogContext } from './dialog-context.js';

const UIDialogHeader = (props) => {
    const { Component } = useDialogContext();
    const HeaderComponent = useRef();
    const [_, update] = useState({});
    useEffect(() => {
        HeaderComponent.current = DIALOG_HEADER[Component.displayName];
        update({});
    }, [Component]);
    return HeaderComponent.current ? jsx(HeaderComponent.current, { ...props }) : jsx(Fragment, {});
};

export { UIDialogHeader };
