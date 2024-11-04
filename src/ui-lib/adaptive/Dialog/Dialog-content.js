import { jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { DIALOG_CONTENT } from './consts/dialog-children.js';
import { useDialogContext } from './dialog-context.js';

const UIDialogContent = (props) => {
    const { Component } = useDialogContext();
    const ContentComponent = useRef();
    const [_, update] = useState({});
    useEffect(() => {
        ContentComponent.current = DIALOG_CONTENT[Component.displayName];
        update({});
    }, [Component]);
    return ContentComponent.current ? jsx(ContentComponent.current, { ...props }) : jsx(Fragment, {});
};

export { UIDialogContent };
