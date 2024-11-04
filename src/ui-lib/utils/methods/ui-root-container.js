const CONTAINER_ID = 'ui-root-container';
const createUiRootContainer = () => {
    const element = document.createElement('div');
    element.id = CONTAINER_ID;
    document.body.appendChild(element);
};
const initUiContainer = () => {
    createUiRootContainer();
};

export { CONTAINER_ID, initUiContainer };
