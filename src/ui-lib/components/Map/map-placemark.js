import { useMapContext } from './map-context.js';
import { usePlacemark } from './use-map.js';

const UIMapPlacemark = (props) => {
    const { map } = useMapContext();
    usePlacemark({ ...props, map });
    return null;
};

export { UIMapPlacemark };
