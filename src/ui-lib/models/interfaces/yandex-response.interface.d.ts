export interface IYandexObjectComponent {
    kind: 'house' | 'street' | 'metro' | 'district' | 'locality' | 'area' | 'province' | 'country' | 'region' | 'hydro' | 'railway_station' | 'station' | 'route' | 'vegetation' | 'airport' | 'entrance' | 'other';
    name: string;
}
export interface IYandexFeature {
    GeoObject: {
        metaDataProperty: {
            GeocoderMetaData: {
                kind: 'house' | 'street' | 'metro' | 'district' | 'locality' | 'area' | 'province' | 'country' | 'region' | 'hydro' | 'railway_station' | 'station' | 'route' | 'vegetation' | 'airport' | 'entrance' | 'other';
                text: string;
                precision: 'exact' | 'number' | 'near' | 'range' | 'street' | 'other';
                Address: {
                    country_code: string;
                    postal_code: string;
                    formatted: string;
                    Components: IYandexObjectComponent[];
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
}
export interface IYandexResponse {
    response: {
        GeoObjectCollection: {
            metaDataProperty: {
                GeocoderResponseMetaData: {
                    request?: string;
                    found?: string;
                    fix?: string;
                    suggest?: string;
                    results?: string;
                    skip?: string;
                };
            };
            featureMember: IYandexFeature[];
        };
    };
}
