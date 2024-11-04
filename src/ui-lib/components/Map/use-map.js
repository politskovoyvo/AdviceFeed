import { useRef, useState, useEffect, isValidElement } from 'react';
import { renderToString } from 'react-dom/server';
import '../../utils/methods/animations.js';
import '../../utils/methods/theme.js';
import { useConfigContext } from '../../config/config-provider.js';
import { useYandexGeocode } from '../../utils/hooks/use-yandex-geocode.js';
import { areNewProperties, addEvents } from './utils.js';
import { loadYandex } from './ymap-script-init.js';

const useMapCreator = (props) => {
    const { id, zoom = 16, center = [55.755864, 37.617698], events = [], options = {}, state = {} } = props;
    const { yandex } = useConfigContext();
    const initStateRef = useRef(false);
    const [map, setMap] = useState(undefined);
    const initMap = () => {
        initStateRef.current = true;
        loadYandex(yandex).then((ymap) => {
            ymap.ready().then(() => {
                const yMap = new window.ymaps.Map(id, {
                    controls: [],
                    center: center,
                    zoom: zoom,
                    ...state
                }, {
                    minZoom: 3,
                    suppressMapOpenBlock: true,
                    ...options
                });
                addEvents(yMap, events);
                setMap(yMap);
            });
        });
    };
    const destroyMap = () => {
        map?.destroy();
        setMap(undefined);
        initStateRef.current = false;
    };
    return { initMap, destroyMap, initStateRef, map };
};
const useMap = (props) => {
    const { initMap, map, destroyMap, initStateRef } = useMapCreator(props);
    useEffect(() => {
        if (!initStateRef.current) {
            initMap();
        }
        return () => {
            destroyMap();
        };
    }, []);
    return map;
};
const useMapInit = (props) => {
    const { map, ...rest } = props;
    return { map };
};
function usePlacemark(props) {
    const { properties = {}, options = {}, events = [], coordinates, map } = props;
    const placemark = useRef(undefined);
    const mapOptions = (markOptions) => {
        if (!markOptions)
            return markOptions;
        const isIconElement = isValidElement(markOptions.iconLayout);
        const icon = isIconElement
            ? window.ymaps.templateLayoutFactory.createClass(renderToString(markOptions.iconLayout))
            : markOptions.iconLayout;
        return {
            ...markOptions,
            iconLayout: icon
        };
    };
    const state = useRef({
        coordinates: coordinates || [],
        options: mapOptions(options),
        properties: properties
    });
    const create = () => {
        if (!map || !coordinates)
            return;
        placemark.current = new window.ymaps.Placemark(coordinates, properties, mapOptions(options));
        addEvents(placemark.current, events);
        map.geoObjects.add(placemark.current);
    };
    const destroy = () => {
        if (map && placemark.current) {
            map.geoObjects.remove(placemark.current);
            placemark.current = undefined;
        }
    };
    useEffect(() => {
        if (!map || !coordinates)
            return;
        create();
        return () => {
            if (placemark.current) {
                map.geoObjects.remove(placemark.current);
                placemark.current = undefined;
            }
        };
    }, []);
    useEffect(() => {
        if (!coordinates)
            return destroy();
        if (!areNewProperties(state.current.coordinates, coordinates))
            return;
        if (!placemark.current) {
            create();
        }
        else {
            placemark.current.geometry?.setCoordinates(coordinates);
        }
        state.current.coordinates = coordinates;
    }, [coordinates]);
    useEffect(() => {
        if (!placemark.current || !coordinates)
            return;
        if (!areNewProperties(state.current.properties, properties))
            return;
        // Так можно типизация пиздит
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        placemark.current.properties.set(properties);
        state.current.properties = properties;
    }, [properties]);
    useEffect(() => {
        if (!placemark.current || !coordinates)
            return;
        const mappedOptions = mapOptions(options);
        if (!areNewProperties(state.current.options, mappedOptions))
            return;
        // Так можно типизация пиздит
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        placemark.current.options.set(mappedOptions);
        state.current.options = mappedOptions;
    }, [options]);
    return {
        placemark,
        state
    };
}
function useMapDrawer(props) {
    const { value, onChange, onSubmit } = props;
    const { geoSearch } = useYandexGeocode();
    const [coordinates, setCoordinates] = useState(value?.GeoObject.coordinates);
    const [showSearch, setShowSearch] = useState(false);
    const [address, setAddress] = useState(value);
    const sendData = () => {
        if (address)
            onSubmit?.(address);
    };
    const handleOpenSearch = () => {
        setShowSearch(true);
    };
    const handleChange = (feature) => {
        setAddress(feature);
        onChange?.(feature);
        void setCoordinates(feature?.GeoObject.coordinates);
    };
    const handleCoordinate = (coord) => {
        geoSearch(coord.join(','), { results: 1 }).then((r) => {
            const feature = r.response.GeoObjectCollection.featureMember[0];
            if (!feature)
                return;
            onChange?.(feature);
            setAddress(feature);
        });
    };
    useEffect(() => {
        if (address &&
            value &&
            value.GeoObject.coordinates[0] === address.GeoObject.coordinates[0] &&
            value.GeoObject.coordinates[1] === address.GeoObject.coordinates[1]) {
            return;
        }
        setAddress(value);
        setCoordinates(value?.GeoObject.coordinates);
    }, [value]);
    return {
        coordinates,
        showSearch,
        setShowSearch,
        address,
        handleOpenSearch,
        handleChange,
        sendData,
        handleCoordinate
    };
}

export { useMap, useMapCreator, useMapDrawer, useMapInit, usePlacemark };
