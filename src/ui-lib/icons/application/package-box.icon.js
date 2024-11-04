import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PackageBoxIcon = forwardRef((props, ref) => {
    return (jsxs("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M12.0002 2.99634V7.99842", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M6.99805 17.0022H8.99888", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M21.0038 9.99937C21.0038 8.89434 20.108 7.99854 19.003 7.99854H4.99717C3.89214 7.99854 2.99634 8.89434 2.99634 9.99937", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.003 21.0038H5.24728C4.00412 21.0038 2.99634 19.9961 2.99634 18.7529V8.49863C2.99602 7.95832 3.10562 7.42359 3.31847 6.92698L4.41293 4.36291C4.76684 3.53388 5.58138 2.9961 6.48279 2.99634H17.5164C18.4178 2.9961 19.2323 3.53388 19.5862 4.36291L20.6867 6.92698C20.8977 7.42399 21.0056 7.95868 21.0039 8.49863V19.003C21.0039 20.108 20.108 21.0038 19.003 21.0038Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
});
PackageBoxIcon.displayName = 'UIPackageBoxIcon';

export { PackageBoxIcon };
