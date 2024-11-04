import type ymaps from 'yandex-maps';
import { IYandexConfig } from './models';
export declare function createScript(yandex?: IYandexConfig): HTMLScriptElement;
export declare function loadYandex(yandex?: IYandexConfig): Promise<typeof ymaps>;
