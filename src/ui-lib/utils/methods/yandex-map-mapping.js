const mapperFeature = (feature) => {
    const coordinates = feature.GeoObject.Point.pos
        .split(' ')
        .map((c) => Number(c))
        .reverse();
    return {
        GeoObject: {
            ...feature.GeoObject,
            coordinates
        }
    };
};
function mapYandexFeature(response) {
    const features = response.response.GeoObjectCollection.featureMember;
    return {
        response: {
            GeoObjectCollection: {
                ...response.response.GeoObjectCollection,
                featureMember: features.map((f) => mapperFeature(f))
            }
        }
    };
}

export { mapYandexFeature };
