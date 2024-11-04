async function getContentType(url) {
    const reponse = await fetch(url, { method: 'HEAD' }).catch((err) => err);
    return reponse.headers?.get('Content-Type') || 'error/error';
}
/** Получение формата из контент тайпа video/mp4 image/png */
function getFormat(str) {
    if (!str) {
        console.error('Нет формата');
        return undefined;
    }
    const isRealFormat = str.match(/^\w+\/{1}[\w+]+$/);
    if (!isRealFormat) {
        console.error(`Невозможно получить формат ${str}`);
        return undefined;
    }
    const [type, format] = str.split('/');
    return { type, format };
}

export { getContentType, getFormat };
