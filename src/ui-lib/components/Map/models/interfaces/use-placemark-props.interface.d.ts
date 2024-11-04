import type { Map } from 'yandex-maps';
import { IMapPlacemarkProps } from './map-placemark-props.interface';
export interface IUsePlacemarkProps extends IMapPlacemarkProps {
    map?: Map;
}
