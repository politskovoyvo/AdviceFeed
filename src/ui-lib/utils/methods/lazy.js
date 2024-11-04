function lazyDisclosure(options) {
    const { wasSelected, enabled, isSelected, mode = 'unmount' } = options;
    if (!enabled) {
        return true;
    }
    if (isSelected) {
        return true;
    }
    return !!(mode === 'keepMounted' && wasSelected);
}

export { lazyDisclosure };
