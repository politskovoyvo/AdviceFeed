import type { IMapOptions } from 'yandex-maps';
import { IMapState } from 'yandex-maps';
import { ILocation } from './location.interface';
import type { IMapEvent } from './map-event.interface';
export interface IUseMapProps extends Partial<ILocation> {
    id: string;
    events?: IMapEvent[];
    options?: IMapOptions;
    state?: Omit<IMapState, 'zoom' | 'center'>;
}
