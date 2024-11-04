import { jsx } from 'react/jsx-runtime';
import { useMemo, useCallback } from 'react';
import { UIMapPlacemark } from './map-placemark.js';
import { animatedLayout } from './placemarkes/animated.js';
import { getEventCoordinates } from './utils.js';

const UIMapDragger = (props) => {
    const { onChangePosition, disabled = false, ...rest } = props;
    const layout = useMemo(() => animatedLayout(disabled), [disabled]);
    const options = { draggable: !disabled, iconLayout: layout, iconOffset: [-20, -36], hasBalloon: false };
    const getCoordinates = useCallback((event) => {
        const coordinates = getEventCoordinates(event);
        onChangePosition?.(coordinates);
    }, [onChangePosition]);
    const events = [{ event: 'dragend', callback: getCoordinates }];
    return jsx(UIMapPlacemark, { events: events, ...rest, options: options });
};

export { UIMapDragger };
