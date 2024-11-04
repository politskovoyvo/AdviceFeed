import { MOBILE_DRAWER_MAX_HEIGHT } from './max-height.js';

const MOBILE_HEIGHT_OFFSET = MOBILE_DRAWER_MAX_HEIGHT / 100;
const getExpandedState = (expanded, height, y) => {
    const MOVE_OFFSET = 0.15;
    if (y < 0 && !expanded) {
        return y < height * MOBILE_HEIGHT_OFFSET * MOVE_OFFSET * -1;
    }
    else if (expanded && y >= 0) {
        return y < height * MOBILE_HEIGHT_OFFSET * MOVE_OFFSET;
    }
};
const getCloseState = (height, y) => {
    const MOVE_OFFSET = 0.34;
    return y > height * MOBILE_HEIGHT_OFFSET * MOVE_OFFSET;
};

export { getCloseState, getExpandedState };
