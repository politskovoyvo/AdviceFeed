import type { CustomThemeConfig, OptionalConfig, RequiredConfig } from 'tailwindcss/types/config';
import type { GreenConfig, OrangeConfig, PrimaryConfig, RedConfig, RusConfig, WalentineConfig, YuriConfig } from '../../consts/default-color-configs.const';
type TColorRequirement<T> = {
    [key in keyof T]: string;
} & {
    [key: string | number]: string;
};
interface IRequiredColors {
    primary: TColorRequirement<typeof PrimaryConfig>;
    walentine: TColorRequirement<typeof WalentineConfig>;
    rus: TColorRequirement<typeof RusConfig>;
    red: TColorRequirement<typeof RedConfig>;
    orange: TColorRequirement<typeof OrangeConfig>;
    green: TColorRequirement<typeof GreenConfig>;
    yuri: TColorRequirement<typeof YuriConfig>;
}
interface IKitConfig {
    colors: Partial<IRequiredColors>;
}
type TConfig = Partial<CustomThemeConfig & Partial<IKitConfig>>;
export type TTailwindConfig = RequiredConfig & Partial<OptionalConfig> & {
    theme: Partial<TConfig & {
        extend: TConfig;
    }>;
};
export {};
