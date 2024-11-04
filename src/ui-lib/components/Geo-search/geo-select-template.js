import { jsx } from 'react/jsx-runtime';

const GeoSelectTemplate = ({ value }) => {
    const { GeoObject } = value;
    return jsx("span", { className: 'text-yuri-400', children: GeoObject.metaDataProperty.GeocoderMetaData.text });
};

export { GeoSelectTemplate };
