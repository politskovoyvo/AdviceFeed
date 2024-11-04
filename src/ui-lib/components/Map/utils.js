function getEventCoordinates(event) {
    const coordinates = event.get('target').geometry._coordinates;
    return coordinates;
}
function areNewProperties(oldProperties, newProperties) {
    const oldJsonStr = JSON.stringify(oldProperties);
    const newJsonStr = JSON.stringify(newProperties);
    return oldJsonStr !== newJsonStr;
}
function addEvents(instance, events) {
    for (let i = 0; i < events.length; i++) {
        const { event, callback } = events[i];
        const eventList = Array.isArray(event) ? event : [event];
        for (let j = 0; j < eventList.length; j++) {
            // Типизация пиздит, событий там больше чем указано https://yandex.ru/dev/jsapi-v2-1/doc/ru/v2-1/ref/reference/Map#events-summary
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            instance.events.add(eventList[j], callback);
        }
    }
}

export { addEvents, areNewProperties, getEventCoordinates };
