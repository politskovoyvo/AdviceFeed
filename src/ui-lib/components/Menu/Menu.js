import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { MenuContext } from './menu-context.js';
import { useMenu, MenuDescendantsProvider } from './use-menu.js';

const UIMenu = (props) => {
    const { children, ...rest } = props;
    const { descendants, ...ctx } = useMenu({ ...rest });
    const context = useMemo(() => ctx, [ctx]);
    return (jsx(MenuDescendantsProvider, { value: descendants, children: jsx(MenuContext.Provider, { value: context, children: children }) }));
};

export { UIMenu };
