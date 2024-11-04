import { jsx } from 'react/jsx-runtime';
import { DialogProvider } from './dialog-context.js';
import { useDialog } from './use-dialog.js';

const UIDialog = (props) => {
    const { children, ...rest } = props;
    const { Component, componentProps } = useDialog(rest);
    return (jsx(DialogProvider, { value: { Component }, children: jsx(Component, { ...componentProps, children: children }) }));
};

export { UIDialog };
