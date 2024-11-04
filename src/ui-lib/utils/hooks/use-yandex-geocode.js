import '../methods/animations.js';
import '../methods/theme.js';
import { useConfigContext } from '../../config/config-provider.js';
import { mapYandexFeature } from '../methods/yandex-map-mapping.js';

/**
 * geocode=Тверская 6
 * geocode=55.760241, 37.611347
 * */
function useYandexGeocode() {
    const { request, yandex } = useConfigContext();
    if (!yandex)
        throw new Error('Передай yandex в конфиг');
    if (!request)
        throw new Error('Передай axios.request в конфиг \n request: axios.request');
    const geoSearch = (query, params = {}) => request({
        method: 'get',
        params: {
            format: 'json',
            ...params,
            apikey: yandex.mapApiKey,
            lang: yandex.lang,
            geocode: query.replace(/\s+/g, '+'),
            sco: 'latlong'
        },
        baseURL: 'https://geocode-maps.yandex.ru/1.x/'
    }).then((res) => {
        return mapYandexFeature(res.data);
    });
    return {
        geoSearch
    };
}

export { useYandexGeocode };
