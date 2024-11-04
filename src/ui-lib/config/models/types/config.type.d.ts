import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IYandexConfig } from '../../../components/Map/models';
import { IComponents, IDrawerSettings, IModalSettings, IRoot } from '../interfaces';
import { TFieldValidation } from './field-validation.type';
export type TConfig = IComponents & IRoot & {
    modal?: IModalSettings;
} & {
    drawer?: IDrawerSettings;
} & {
    yandex?: IYandexConfig;
    request?<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
    fieldValidation?: TFieldValidation<any>;
};
