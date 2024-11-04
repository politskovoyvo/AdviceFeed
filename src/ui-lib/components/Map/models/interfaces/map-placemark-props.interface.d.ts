import { ReactNode } from 'react';
import type { IClassConstructor, IconLayoutKey, IDataManager, ILayout, IPlacemarkOptions } from 'yandex-maps';
import { IMapEvent } from './map-event.interface';
export type TPlaceMarkOptions = Omit<IPlacemarkOptions, 'iconLayout'> & {
    iconLayout?: IClassConstructor<ILayout> | IconLayoutKey | ReactNode;
};
export interface IMapPlacemarkProps {
    coordinates?: number[];
    options?: TPlaceMarkOptions;
    properties?: IDataManager;
    events?: IMapEvent[];
}
