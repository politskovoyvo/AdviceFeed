const drawerTransition = {
    top: 'data-[closed]:-translate-y-full translate-y-0',
    right: 'data-[closed]:translate-x-full translate-x-0',
    bottom: 'data-[closed]:translate-y-full translate-y-0',
    left: 'data-[closed]:-translate-x-full translate-x-0',
    full: 'data-[closed]:translate-y-full translate-y-0'
};
const drawerPosition = {
    top: 'top-0 left-0 right-0',
    right: 'top-0 right-0 bottom-0',
    bottom: 'bottom-0 left-0 right-0',
    left: 'top-0 bottom-0 left-0',
    full: 'top-0 bottom-0 left-0 right-0'
};

export { drawerPosition, drawerTransition };
