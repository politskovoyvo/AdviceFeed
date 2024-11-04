import { IYandexFeature } from '../../models';
export interface IAddressProperties {
    region: string;
    city: string;
    street: string;
    house: string;
    district: string;
    area: string;
}
export declare function getAddressToponyms(feature: IYandexFeature): IAddressProperties;
