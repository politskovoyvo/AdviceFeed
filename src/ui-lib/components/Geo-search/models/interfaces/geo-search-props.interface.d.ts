import { TYandexMappedFeature } from '../../../../utils/methods/yandex-map-mapping';
import { ISelectProps } from '../../../Select/models';
import { IUseGeoSearch } from './use-geo-search.interface';
export interface IGeoSearchProps extends IUseGeoSearch, Omit<ISelectProps, 'searchable' | 'isSearchOutSide' | 'value' | 'onSearch' | 'list' | 'selectedTemplate' | 'optionTemplate'> {
    value?: TYandexMappedFeature;
}
