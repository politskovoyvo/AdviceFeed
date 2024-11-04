/// <reference types="react" />
import { TConfig, TConfigInit } from './models';
export declare function initUi(config: TConfig): void;
export declare function uiConfig(config?: Partial<TConfigInit>): {
    safeZone: {
        left: string;
        right: string;
        bottom: string;
        top: string;
    };
    Link: Partial<{
        component: "a" | import("react").ForwardRefExoticComponent<Omit<import("react-router-dom").LinkProps, "to"> & {
            href: import("react-router").To;
        } & {
            to: import("react-router").To;
        } & import("react").RefAttributes<HTMLAnchorElement>>;
    }>;
    LinkNavigation: Partial<{
        component: "a" | import("react").ForwardRefExoticComponent<Omit<import("react-router-dom").NavLinkProps, "to"> & {
            href: import("react-router").To;
        } & {
            to: import("react-router").To;
        } & import("react").RefAttributes<HTMLAnchorElement>>;
    }>;
    animation?: "no-preference" | "reduced" | undefined;
    root: {
        id: string;
    };
    fixedTheme?: "dark" | "light" | undefined;
    modal?: import("./models").IModalSettings | undefined;
    drawer?: import("./models").IDrawerSettings | undefined;
    fieldValidation?: import("./models").TFieldValidation<any> | undefined;
    yandex?: import("../components/Map/models").IYandexConfig | undefined;
    request?: (<T = any, R = import("axios").AxiosResponse<T, any>, D = any>(config: import("axios").AxiosRequestConfig<D>) => Promise<R>) | undefined;
};
