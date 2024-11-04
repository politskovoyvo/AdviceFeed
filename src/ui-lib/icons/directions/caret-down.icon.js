import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const CaretDownIcon = forwardRef((props, ref) => {
    return (jsx("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M8.20711 10C7.76165 10 7.53857 10.5386 7.85355 10.8536L11.6464 14.6464C11.8417 14.8417 12.1583 14.8417 12.3536 14.6464L16.1464 10.8536C16.4614 10.5386 16.2383 10 15.7929 10H8.20711Z", fill: "currentColor", fillOpacity: "0.5" }) }));
});
CaretDownIcon.displayName = 'UICaretDownIcon';

export { CaretDownIcon };
