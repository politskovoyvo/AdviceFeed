const ToastContainerPosition = {
    'bottom-left': 'z-40',
    'bottom-right': 'z-40',
    'top-left': 'z-40',
    'top-right': 'z-40',
    'bottom-center': 'z-30 md:left-0 md:right-0 md:items-center',
    'top-center': 'z-30 md:left-0 md:right-0 md:items-center'
};
const ToastSafeContainerKeys = {
    'bottom-left': ['bottom', 'left'],
    'bottom-right': ['bottom', 'right'],
    'top-left': ['top', 'left'],
    'top-right': ['top', 'right'],
    'bottom-center': ['bottom'],
    'top-center': ['top']
};

export { ToastContainerPosition, ToastSafeContainerKeys };
