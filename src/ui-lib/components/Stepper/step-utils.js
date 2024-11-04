function getStatus(step, activeStep) {
    if (step < activeStep)
        return 'complete';
    if (step > activeStep)
        return 'incomplete';
    return 'active';
}

export { getStatus };
