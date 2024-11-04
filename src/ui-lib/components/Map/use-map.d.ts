/// <reference types="react" />
import type { IDataManager, IPlacemarkOptions, Map, Placemark } from 'yandex-maps';
import { TYandexMappedFeature } from '../../utils/methods/yandex-map-mapping';
import { IUseMapDrawerProps, IUseMapInitProps, IUseMapProps, IUsePlacemarkProps } from './models';
export type TUseMapReturn = ReturnType<typeof useMap>;
export declare const useMapCreator: (props: IUseMapProps) => {
    initMap: () => void;
    destroyMap: () => void;
    initStateRef: import("react").MutableRefObject<boolean>;
    map: Map | undefined;
};
export declare const useMap: (props: IUseMapProps) => Map | undefined;
export declare const useMapInit: (props: IUseMapInitProps) => {
    map: Map | undefined;
};
interface IPlacemarkState {
    coordinates: number[];
    properties: object | IDataManager;
    options?: IPlacemarkOptions;
}
export declare function usePlacemark(props: IUsePlacemarkProps): {
    placemark: import("react").MutableRefObject<Placemark | undefined>;
    state: import("react").MutableRefObject<IPlacemarkState>;
};
export declare function useMapDrawer(props: IUseMapDrawerProps): {
    coordinates: number[] | undefined;
    showSearch: boolean;
    setShowSearch: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    address: {
        GeoObject: {
            coordinates: number[];
            metaDataProperty: {
                GeocoderMetaData: {
                    kind: "region" | "area" | "other" | "country" | "house" | "street" | "metro" | "district" | "locality" | "province" | "hydro" | "railway_station" | "station" | "route" | "vegetation" | "airport" | "entrance";
                    text: string;
                    precision: "number" | "exact" | "range" | "other" | "street" | "near";
                    Address: {
                        country_code: string;
                        postal_code: string;
                        formatted: string;
                        Components: import("../../models").IYandexObjectComponent[];
                    };
                    AddressDetails: {
                        Country: {
                            AddressLine: string;
                            CountryNameCode: string;
                            CountryName: string;
                            AdministrativeArea: {
                                AdministrativeAreaName: string;
                                Locality: {
                                    LocalityName: string;
                                    Thoroughfare: {
                                        ThoroughfareName: string;
                                        Premise: {
                                            PremiseNumber: string;
                                            PostalCode: {
                                                PostalCodeNumber: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            description: string;
            name: string;
            boundedBy: {
                Envelope: {
                    lowerCorner: string;
                    upperCorner: string;
                };
            };
            Point: {
                pos: string;
            };
        };
    } | undefined;
    handleOpenSearch: () => void;
    handleChange: (feature?: TYandexMappedFeature) => void;
    sendData: () => void;
    handleCoordinate: (coord: number[]) => void;
};
export {};
