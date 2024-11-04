const getProperties = (propertiesList) => {
    return propertiesList.reduce((acc, val) => {
        let top = {};
        if (val.kind === 'locality' && acc['locality']) {
            top = { locality2: val.name };
        }
        else {
            top = { [val.kind]: val.name };
        }
        return { ...acc, ...top };
    }, {
        country: '',
        province: '',
        locality: '',
        locality2: '',
        area: '',
        district: '',
        street: '',
        house: ''
    });
};
function getAddressToponyms(feature) {
    const components = feature.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components;
    const { province, locality, locality2, district, street, house, area } = getProperties(components);
    return {
        region: province ? province : area,
        city: locality ? locality : province,
        street: street ? street : district || locality2,
        house,
        district,
        area
    };
}

export { getAddressToponyms };
