import { TYandexMappedFeature } from '../../../../utils/methods/yandex-map-mapping';
import { IDrawerProps } from '../../../Drawer/models';
import { IGeoSearchProps } from '../../../Geo-search/models';
import { ILocation } from './location.interface';
export interface IMapDrawerProps extends Omit<IDrawerProps, 'children'>, Partial<ILocation>, Pick<IGeoSearchProps, 'theme'> {
    value?: TYandexMappedFeature;
    onChange?(value?: TYandexMappedFeature): void;
    onSubmit?(value: TYandexMappedFeature): void;
    loading?: boolean;
}
