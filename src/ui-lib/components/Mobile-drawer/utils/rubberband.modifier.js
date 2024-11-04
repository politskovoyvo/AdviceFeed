import { MOBILE_DRAWER_MAX_HEIGHT } from './max-height.js';

function clamp(v, min, max) {
    return Math.max(min, Math.min(v, max));
}
function rubberband(distance, dimension, elasticity) {
    if (dimension === 0 || Math.abs(dimension) === Infinity)
        return Math.pow(distance, elasticity * 5);
    return (distance * dimension * elasticity) / (dimension + elasticity * distance);
}
function rubberbandIfOutOfBounds(position, min, max, elasticity = 0.1) {
    if (elasticity === 0)
        return clamp(position, min, max);
    if (position < min)
        return -rubberband(min - position, max - min, elasticity) + min;
    if (position > max)
        return +rubberband(position - max, max - min, elasticity) + max;
    return position;
}
function rubberbandBoundingRect(transform, rect, boundingRect) {
    const value = {
        ...transform
    };
    // Dragging above the top edge of the bounding box
    if (rect.top + transform.y <= boundingRect.top) {
        const min = boundingRect.top - rect.top;
        const max = min + rect.height;
        value.y = rubberbandIfOutOfBounds(transform.y, min, max);
    }
    // Dragging below the bottom edge of the bounding box
    else if (rect.bottom + transform.y >= boundingRect.top + boundingRect.height) {
        const boundingRectBottom = boundingRect.top + boundingRect.height;
        const min = boundingRectBottom - rect.bottom;
        const max = min - rect.height;
        value.y = rubberbandIfOutOfBounds(transform.y, max, min);
    }
    // Draging beyond the left edge of the bounding box
    if (rect.left + transform.x <= boundingRect.left) {
        const min = boundingRect.left - rect.left;
        const max = min + rect.width;
        value.x = rubberbandIfOutOfBounds(transform.x, min, max);
    }
    // Draging beyond the right edge of the bounding box
    else if (rect.right + transform.x >= boundingRect.left + boundingRect.width) {
        const boundingRectRight = boundingRect.left + boundingRect.width;
        const min = boundingRectRight - rect.right;
        const max = min - rect.width;
        value.x = rubberbandIfOutOfBounds(transform.x, max, min);
    }
    return value;
}
const rubberbandModifier = ({ draggingNodeRect, transform, windowRect, activatorEvent }) => {
    if (!draggingNodeRect || !windowRect) {
        return transform;
    }
    return rubberbandBoundingRect(transform, draggingNodeRect, {
        ...windowRect,
        top: (1 - MOBILE_DRAWER_MAX_HEIGHT / 100) * windowRect.height,
        height: (MOBILE_DRAWER_MAX_HEIGHT / 100) * windowRect.height
    });
};

export { rubberbandModifier };
