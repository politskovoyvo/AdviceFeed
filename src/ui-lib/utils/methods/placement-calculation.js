const placementCalculation = {
    'top-left': function (parent, child, margin, flowX, flowY) {
        const { x } = parent.getBoundingClientRect();
        return { x: x, y: (flowY || parent.offsetTop) - child.clientHeight - margin };
    },
    'top-center': function (parent, child, margin, flowX, flowY) {
        const { x } = parent.getBoundingClientRect();
        return { x: x + parent.clientWidth / 2 - child.clientWidth / 2, y: (flowY || parent.offsetTop) - child.clientHeight - margin };
    },
    'top-right': function (parent, child, margin, flowX, flowY) {
        const { x } = parent.getBoundingClientRect();
        return { x: x + parent.clientWidth - child.clientWidth, y: (flowY || parent.offsetTop) - child.clientHeight - margin };
    },
    'right-top': function (parent, child, margin, flowX, flowY) {
        const { x } = parent.getBoundingClientRect();
        return { x: x + parent.clientWidth + margin, y: flowY || parent.offsetTop };
    },
    'right-center': function (parent, child, margin, flowX, flowY) {
        const { x } = parent.getBoundingClientRect();
        return { x: x + parent.clientWidth + margin, y: (flowY || parent.offsetTop) - child.clientHeight / 2 + parent.clientHeight / 2 };
    },
    'right-bottom': function (parent, child, margin, flowX, flowY) {
        const { x } = parent.getBoundingClientRect();
        return { x: x + parent.clientWidth + margin, y: (flowY || parent.offsetTop) - child.clientHeight + parent.clientHeight };
    },
    'bottom-right': function (parent, child, margin, flowX, flowY) {
        const { x } = parent.getBoundingClientRect();
        return { x: x + parent.clientWidth - child.clientWidth, y: (flowY || parent.offsetTop) + parent.clientHeight + margin };
    },
    'bottom-center': function (parent, child, margin, flowX, flowY) {
        const { x } = parent.getBoundingClientRect();
        return { x: x + parent.clientWidth / 2 - child.clientWidth / 2, y: (flowY || parent.offsetTop) + parent.clientHeight + margin };
    },
    'bottom-left': function (parent, child, margin, flowX, flowY) {
        const { x } = parent.getBoundingClientRect();
        return { x: x, y: (flowY || parent.offsetTop) + parent.clientHeight + margin };
    },
    'left-bottom': function (parent, child, margin, flowX, flowY) {
        const { x } = parent.getBoundingClientRect();
        return { x: x - child.clientWidth - margin, y: (flowY || parent.offsetTop) - child.clientHeight + parent.clientHeight };
    },
    'left-center': function (parent, child, margin, flowX, flowY) {
        const { x } = parent.getBoundingClientRect();
        return { x: x - child.clientWidth - margin, y: (flowY || parent.offsetTop) - child.clientHeight / 2 + parent.clientHeight / 2 };
    },
    'left-top': function (parent, child, margin, flowX, flowY) {
        const { x } = parent.getBoundingClientRect();
        return { x: x - child.clientWidth - margin, y: flowY || parent.offsetTop };
    }
};

export { placementCalculation };
