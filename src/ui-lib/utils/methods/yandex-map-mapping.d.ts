import { IYandexFeature, IYandexResponse } from '../../models';
export type TYandexMappedResponse = ReturnType<typeof mapYandexFeature>;
export type TYandexMappedFeature = ReturnType<typeof mapperFeature>;
declare const mapperFeature: (feature: IYandexFeature) => {
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
};
export declare function mapYandexFeature(response: IYandexResponse): {
    response: {
        GeoObjectCollection: {
            featureMember: {
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
            }[];
            metaDataProperty: {
                GeocoderResponseMetaData: {
                    request?: string | undefined;
                    found?: string | undefined;
                    fix?: string | undefined;
                    suggest?: string | undefined;
                    results?: string | undefined;
                    skip?: string | undefined;
                };
            };
        };
    };
};
export {};
