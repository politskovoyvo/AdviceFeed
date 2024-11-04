import { IColorConfig } from './models';
export declare const RGBtoHEX: (rgb: {
    r: number;
    g: number;
    b: number;
}) => string;
export declare const minMaxRGB: (number: number) => number;
export declare const HEXtoRGB: (color: string) => {
    r: number;
    g: number;
    b: number;
};
export declare const colorPalette: <T extends IColorConfig = IColorConfig>(color: string, config: T) => { [key in keyof T]: string; };
