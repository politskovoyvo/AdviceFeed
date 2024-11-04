const RGBtoHEX = (rgb) => '#' + [rgb.r, rgb.g, rgb.b].map((x) => x.toString(16).padStart(2, '0')).join('');
const minMaxRGB = (number) => {
    if (number > 255)
        return 255;
    if (number < 0)
        return 0;
    return number;
};
const HEXtoRGB = (color) => {
    if (!color.length || color.length < 7) {
        return { r: 255, g: 255, b: 255 };
    }
    const r = minMaxRGB(parseInt('0x' + color.substring(1, 3)));
    const g = minMaxRGB(parseInt('0x' + color.substring(3, 5)));
    const b = minMaxRGB(parseInt('0x' + color.substring(5, 7)));
    return { r: r, g: g, b: b };
};
const RGBWithStepsByHEX = (color, steps) => {
    const { r, g, b } = HEXtoRGB(color);
    return `rgb(${minMaxRGB(r + steps.r)},${minMaxRGB(g + steps.g)},${minMaxRGB(b + steps.b)})`;
};
const colorPalette = (color, config) => {
    const result = {};
    Object.entries(config)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([shade, config]) => {
        const rgb = RGBWithStepsByHEX(color, config);
        result[shade] = rgb;
    });
    return result;
};

export { HEXtoRGB, RGBtoHEX, colorPalette, minMaxRGB };
