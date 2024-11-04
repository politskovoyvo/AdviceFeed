import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../../utils/methods/animations.js';
import '../../utils/methods/theme.js';
import { useConfigContext } from '../../config/config-provider.js';

const UILinkNavigation = forwardRef(({ className, to, ...rest }, ref) => {
    const config = useConfigContext();
    const Component = config.LinkNavigation.component;
    return jsx(Component, { ref: ref, to: to, className: className, href: to, ...rest });
});
UILinkNavigation.displayName = 'UILinkNavigation';

export { UILinkNavigation };
