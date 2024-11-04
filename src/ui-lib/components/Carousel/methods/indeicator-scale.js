const SCALE_SIZES = {
    lg: 100,
    md: 75,
    sm: 50
};
/**
 * Возвращает размер масштабирования индикатора
 */
const getIndicatorScale = (selectedIndex, index) => {
    let scale;
    switch (selectedIndex) {
        case index:
            scale = SCALE_SIZES.lg;
            break;
        case index + 1:
        case index - 1:
            scale = SCALE_SIZES.md;
            break;
        default:
            scale = SCALE_SIZES.sm;
    }
    return scale;
};

export { getIndicatorScale };
