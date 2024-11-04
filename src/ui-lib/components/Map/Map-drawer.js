import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { ArrowDownIcon } from '../../icons/directions/arrow-down.icon.js';
import { useDisclosure } from '../../utils/hooks/use-disclosure.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { UIButton } from '../Button/Button.js';
import { UIDrawer } from '../Drawer/Drawer.js';
import '../Drawer/Drawer-content.js';
import '../Drawer/drawer-context.js';
import '../Drawer/Drawer-footer.js';
import '../Drawer/Drawer-header.js';
import { UIGeoSearch } from '../Geo-search/Geo-search.js';
import { UISkeleton } from '../Skeleton/Skeleton.js';
import '../Skeleton/skeleton-context.js';
import { UIMap } from './Map.js';
import { UIMapCenterMark } from './map-center-mark.js';
import { useMapDrawer, useMapCreator } from './use-map.js';

const UIMapDrawer = (props) => {
    const { center, zoom, theme, isOpen, value, close, open, onChange, onSubmit, className = '', loading: loadingProp, ...rest } = props;
    const id = uniqueId('map-drawer');
    const { showSearch, setShowSearch, coordinates, address, handleOpenSearch, handleChange, sendData, handleCoordinate } = useMapDrawer({
        center,
        zoom,
        value,
        onChange,
        onSubmit
    });
    const { initMap, destroyMap, map } = useMapCreator({
        id,
        center: coordinates ?? center,
        zoom,
        state: { controls: ['zoomControl'] },
        options: {
            autoFitToViewport: 'always',
            // В типизации это типа нет, но по факту он есть https://yandex.ru/dev/jsapi-v2-1/doc/ru/v2-1/dg/concepts/controls/edit#control-options
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            zoomControlPosition: { right: '22px', top: '38vh' },
            zoomControlSize: 'small'
        }
    });
    useEffect(() => {
        if (coordinates && map)
            map.setCenter(coordinates);
    }, [coordinates]);
    const onClose = () => {
        destroyMap();
        close();
    };
    const onOpen = () => {
        open?.();
    };
    const disclosure = useDisclosure({ isOpen: isOpen, close: onClose, open: onOpen });
    const handleSubmit = () => {
        sendData();
        disclosure.close();
    };
    return (jsx(UIDrawer, { isOpen: disclosure.isOpen, close: disclosure.close, afterOpen: initMap, afterClose: destroyMap, closable: false, noneStyles: true, position: 'full', className: `${className} group/drawer`, ...rest, children: jsxs("div", { className: 'relative flex h-full flex-col', children: [jsx("div", { className: 'absolute left-4 top-4 z-20', children: jsx(UIButton, { onClick: disclosure.close, theme: 'empty', className: 'rotate-90 rounded-lg bg-walentine-100 p-2 text-i-24 text-yuri-400 shadow-lg', children: jsx(ArrowDownIcon, {}) }) }), jsx(UIMap, { className: 'flex-1', id: id, map: map, children: jsx(UIMapCenterMark, { onChangePosition: handleCoordinate }) }), jsx("div", { className: 'h-0 w-0 overflow-hidden', children: jsx(UIGeoSearch, { theme: theme, value: address, onChange: handleChange, open: showSearch, setOpen: setShowSearch }) }), jsxs("section", { className: 'absolute bottom-0 left-0 right-0 flex w-full flex-col items-center gap-4 bg-walentine-100 p-4', children: [jsx(UISkeleton, { text: 'sm', shape: 'circle', className: 'w-full', animation: true, loading: loadingProp, children: address && (jsx("p", { className: 'text-sm font-normal text-yuri-400 group-aria-invalid/drawer:text-red-800 dark:text-walentine-100', children: address.GeoObject.metaDataProperty.GeocoderMetaData.text })) }), jsxs("div", { className: 'flex w-full gap-2', children: [jsx(UIButton, { className: 'w-full', theme: 'outline', onClick: handleOpenSearch, disabled: loadingProp, children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C" }), jsx(UIButton, { className: 'w-full', theme: 'primary', onClick: handleSubmit, disabled: loadingProp, children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C" })] })] })] }) }));
};

export { UIMapDrawer };
