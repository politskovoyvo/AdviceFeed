import { TailwindOwnObject } from '../../../models';
import { TBadgeColor, TBadgeTheme } from '../models';
type TBadgeStatusTheme = {
    [key in TBadgeColor]: string;
};
export declare const BadgeColorThemeClasses: TailwindOwnObject<TBadgeTheme, TBadgeStatusTheme>;
export {};
