import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { CharInputDescendantsProvider, CharInputProvider } from './char-input-context.js';
import { useCharInput } from './use-char-input.js';

const UICharInput = forwardRef((props, ref) => {
    const { children, ...rest } = props;
    const { htmlProps, descendants, ...ctx } = useCharInput(rest);
    const context = useMemo(() => ctx, [ctx]);
    return (jsx(CharInputDescendantsProvider, { value: descendants, children: jsx(CharInputProvider, { value: context, children: jsx("div", { ...htmlProps, children: children }) }) }));
});
UICharInput.displayName = 'UICharInput';

export { UICharInput };
