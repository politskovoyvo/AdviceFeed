import { jsx } from 'react/jsx-runtime';
import { useRef, useCallback, useEffect } from 'react';
import { MapPinIcon } from '../../icons/application/map-pin.icon.js';
import { useMapContext } from './map-context.js';
import { addEvents } from './utils.js';

const UIMapCenterMark = (props) => {
    const { onChangePosition } = props;
    const { map } = useMapContext();
    const elementRef = useRef(null);
    const coordinatesRef = useRef([]);
    const moveEnd = useCallback(() => {
        elementRef.current?.classList.remove('drag');
        if (!map)
            return;
        const coordinates = map.getCenter();
        if (coordinatesRef.current.join(',') !== coordinates.join(',')) {
            onChangePosition?.(coordinates);
            coordinatesRef.current = coordinates;
        }
    }, [onChangePosition]);
    useEffect(() => {
        if (!map || !elementRef.current)
            return;
        const events = [
            { event: ['actionbegin'], callback: () => elementRef.current?.classList.add('drag') },
            { event: ['actionend'], callback: moveEnd }
        ];
        addEvents(map, events);
    }, []);
    return (jsx("div", { ref: elementRef, className: 'placemark pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-2/4 -translate-y-full text-i-40', children: jsx(MapPinIcon, {}) }));
};

export { UIMapCenterMark };
