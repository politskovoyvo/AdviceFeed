const rootContent = {
    id: '',
    element: undefined
};
const overlays = [];
const initHideUiRoot = (id) => {
    if (!id) {
        throw Error('Нет id родительского контейнера config root.id');
    }
    const rootElement = document.getElementById(id);
    if (!rootElement) {
        console.error(`Не найден контейнер с id "${id}"`);
    }
    else {
        rootContent.id = id;
        rootContent.element = rootElement;
    }
};
const lockRootContent = () => {
    document.body.classList.add('prevent-scroll');
    rootContent.element?.setAttribute('aria-hidden', 'true');
};
const unlockRootContent = () => {
    document.body.classList.remove('prevent-scroll');
    rootContent.element?.removeAttribute('aria-hidden');
};
const checkOverlays = () => {
    const overlaysExists = overlays.length > 0;
    if (overlaysExists && rootContent.element?.getAttribute('aria-hidden'))
        return;
    if (overlaysExists) {
        lockRootContent();
    }
    else {
        unlockRootContent();
    }
};
const addOverLay = (id) => {
    overlays.push(id);
    checkOverlays();
};
const removeOverlay = (id) => {
    const foundedIndex = overlays.findIndex((oId) => oId === id);
    if (foundedIndex !== -1) {
        overlays.splice(foundedIndex, 1);
        checkOverlays();
    }
};
const getLockRootContentState = () => {
    return Boolean(rootContent.element?.getAttribute('aria-hidden'));
};

export { addOverLay, getLockRootContentState, initHideUiRoot, removeOverlay };
