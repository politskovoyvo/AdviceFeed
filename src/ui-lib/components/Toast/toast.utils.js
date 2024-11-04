const findById = (arr, id) => arr.find((toast) => toast.id === id);
function getToastPosition(toasts, id) {
    for (const [position, values] of Object.entries(toasts)) {
        if (findById(values, id)) {
            return position;
        }
    }
}
function findToast(toasts, id) {
    const position = getToastPosition(toasts, id);
    const index = position ? toasts[position].findIndex((toast) => toast.id === id) : -1;
    return {
        position,
        index
    };
}
const isVisible = (toasts, id) => !!getToastPosition(toasts, id);

export { findById, findToast, getToastPosition, isVisible };
