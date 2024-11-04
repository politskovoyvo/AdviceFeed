import { jsxs, jsx } from 'react/jsx-runtime';

const GeoOptionTemplate = ({ value }) => {
    const { GeoObject } = value;
    return (jsxs("div", { className: 'flex items-center gap-2 overflow-hidden overflow-ellipsis text-sm font-normal', children: [jsx("span", { className: 'whitespace-nowrap text-yuri-400', children: GeoObject.name }), jsx("span", { className: 'overflow-hidden overflow-ellipsis whitespace-nowrap text-rus-600', children: GeoObject.description })] }));
};

export { GeoOptionTemplate };
