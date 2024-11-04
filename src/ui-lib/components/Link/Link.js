import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../../utils/methods/animations.js';
import '../../utils/methods/theme.js';
import { useConfigContext } from '../../config/config-provider.js';

const UILink = forwardRef((props, ref) => {
    const config = useConfigContext();
    const Component = config.Link.component || 'a';
    return (jsx(Component, { ref: ref, to: props.href, ...props, children: props.children }));
});
UILink.displayName = 'UILink';

export { UILink };
