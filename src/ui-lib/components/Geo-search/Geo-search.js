import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useYandexGeocode } from '../../utils/hooks/use-yandex-geocode.js';
import { debounce } from '../../utils/methods/debounce.js';
import { UISelect } from '../Select/Select.js';
import { GeoOptionTemplate } from './geo-option-template.js';
import { GeoSelectTemplate } from './geo-select-template.js';

const UIGeoSearch = (props) => {
    const { value, ...rest } = props;
    const [selected, setSelected] = useState(value);
    const [options, setOptions] = useState(undefined);
    const { geoSearch } = useYandexGeocode();
    const handleSearch = debounce((query) => {
        if (!query) {
            return setOptions(undefined);
        }
        geoSearch(query)
            .then((response) => {
            const list = response.response.GeoObjectCollection.featureMember.map((o) => ({
                value: o,
                label: o.GeoObject.name
            }));
            setOptions(list);
        })
            .catch((e) => {
            console.error(e);
        });
    }, 350);
    useEffect(() => {
        if (value) {
            setOptions([{ value: value, label: value.GeoObject.name }]);
        }
        setSelected(value);
    }, [value]);
    return (jsx(UISelect, { ...rest, value: selected, searchable: true, isSearchOutSide: true, onSearch: handleSearch, autocomplete: true, list: options, optionTemplate: GeoOptionTemplate, selectedTemplate: GeoSelectTemplate }));
};

export { UIGeoSearch };
