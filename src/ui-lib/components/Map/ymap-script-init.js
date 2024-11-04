function getScriptSrc({ lang, mapApiKey }) {
    const version = '2.1';
    const params = Object.entries({ lang, apikey: mapApiKey })
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    return `https://api-maps.yandex.ru/${version}/?coordorder=latlong&${params}`;
}
let YMAPS_ONLOAD = false;
function createScript(yandex) {
    if (!yandex) {
        throw new Error('Чтобы использовать карту яндекс укажи в initUi \n yandex: {\n' + '    lang: string;\n' + '    apikey: string;\n' + '  };');
    }
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = getScriptSrc(yandex);
    script.id = 'yandex-api-maps-script';
    script.async = true;
    return script;
}
function loadYandex(yandex) {
    return new Promise((resolve, reject) => {
        if (window.ymaps) {
            resolve(window.ymaps);
        }
        const script = document.getElementById('yandex-api-maps-script') ?? createScript(yandex);
        script.onload = (ym) => resolve(window.ymaps);
        script.onerror = (err) => reject(err);
        if (!YMAPS_ONLOAD) {
            document.body.appendChild(script);
            YMAPS_ONLOAD = true;
        }
    });
}

export { createScript, loadYandex };
