import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { MapContext } from './map-context.js';
import { useMapInit } from './use-map.js';

const UIMap = forwardRef((props, ref) => {
    const { id, className = '', children, ...rest } = props;
    const context = useMapInit({ ...rest, id });
    return (jsx(MapContext.Provider, { value: context, children: jsx("div", { id: id, ref: ref, className: `relative flex ${className}`, children: context.map && children }) }));
});
UIMap.displayName = 'UIMap';

export { UIMap };
