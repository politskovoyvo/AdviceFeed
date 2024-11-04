import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MessageAppendix = forwardRef((props, ref) => {
    return (jsx("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.62947 15.0673C4.80627 16.2978 7.32112 17 10 17H16.3388C13.0873 14.4363 11 10.4619 11 6V2H10.9693C10.6208 7.65036 7.33978 12.5072 2.62947 15.0673Z", fill: "currentColor" }) }));
});
MessageAppendix.displayName = 'UIMessageAppendix';

export { MessageAppendix };
