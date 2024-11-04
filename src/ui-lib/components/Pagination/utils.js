const arrayRange = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, index) => start + index);
};
const generateSteps = (step, total, size, stepsToShow, boundary) => {
    const startPages = arrayRange(1, Math.min(boundary, total));
    const endPages = arrayRange(Math.max(total - boundary + 1, boundary + 1), total);
    const start = Math.max(Math.min(step - stepsToShow, total - boundary - stepsToShow * 2 - 1), boundary + 2);
    const end = Math.min(Math.max(step + stepsToShow, boundary + stepsToShow * 2 + 2), endPages.length > 0 ? endPages[0] - 2 : total - 1);
    return [
        ...startPages,
        ...(start > boundary + 2 ? ['prev'] : boundary + 1 < total - boundary ? [boundary + 1] : []),
        ...arrayRange(start, end),
        ...(end < total - boundary - 1 ? ['next'] : total - boundary > boundary ? [total - boundary] : []),
        ...endPages
    ];
};

export { generateSteps };
