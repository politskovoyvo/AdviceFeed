import { debounce } from './debounce.js';

const HEIGHT_VAR = '--screen-height';
const VIEWPORT_HEIGHT_VAR = '--viewport-height';
const HeightListen = () => {
    const setHeight = debounce(() => {
        document.documentElement.style.setProperty(HEIGHT_VAR, `${window.innerHeight}px`);
    }, 5);
    const setHeightAsViewPortHeight = debounce(() => {
        document.documentElement.style.setProperty(VIEWPORT_HEIGHT_VAR, `${window.innerHeight}px`);
    }, 5);
    const setViewPortHeight = debounce(() => {
        document.documentElement.style.setProperty(VIEWPORT_HEIGHT_VAR, `${window.visualViewport.height}px`);
    }, 5);
    if (!window.visualViewport) {
        console.error('Браузер не поддерживает visualViewport');
        const methods = () => {
            setHeight();
            setHeightAsViewPortHeight();
        };
        methods();
        window.addEventListener('resize', methods);
    }
    else {
        setHeight();
        setViewPortHeight();
        window.visualViewport.addEventListener('resize', setViewPortHeight);
        window.addEventListener('resize', setHeight);
    }
};

export { HEIGHT_VAR, HeightListen, VIEWPORT_HEIGHT_VAR };
