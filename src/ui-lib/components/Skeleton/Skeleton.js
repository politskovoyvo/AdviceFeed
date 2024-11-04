import { jsx, Fragment } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { TextSize } from '../Text/tailwind-variations/size.js';
import { useSkeletonContext } from './skeleton-context.js';
import { SkeletonShape } from './tailwind-variations/shape.js';

const UISkeleton = forwardRef((props) => {
    const { className = '', text, shape = 'default', animation = false, loading: loadingProp, children, ...rest } = props;
    const context = useSkeletonContext();
    const shapeClassName = SkeletonShape[shape];
    const animationClassName = animation ? 'animate-pulse' : '';
    const textClassName = text ? `${TextSize[text]}` : '';
    const loading = loadingProp ?? context?.loading ?? true;
    return loading ? (jsx("div", { className: `${className} ${shapeClassName} ${animationClassName} ${textClassName} block min-h-3 bg-rus-100`, ...rest, children: "\u00A0" })) : (jsx(Fragment, { children: children }));
});
UISkeleton.displayName = 'UISkeleton';

export { UISkeleton };
