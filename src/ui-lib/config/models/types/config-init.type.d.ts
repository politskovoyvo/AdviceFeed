import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IYandexConfig } from '../../../components/Map/models';
import { TDeepPartial } from '../../../models';
import { IComponents, IDrawerSettings, IModalSettings, IRoot } from '../interfaces';
import { TFieldValidation } from './field-validation.type';
export type TConfigInit = IComponents & Omit<IRoot, 'safeZone'> & TDeepPartial<Pick<IRoot, 'safeZone'>> & {
    modal?: IModalSettings;
} & {
    drawer?: IDrawerSettings;
} & {
    fieldValidation?: TFieldValidation<any>;
} & {
    yandex?: IYandexConfig;
    request?<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
};
