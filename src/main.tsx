import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WebApp from '@twa-dev/sdk'
import {uiConfig} from "./ui-lib/config";
import {UIProvider} from "./ui-lib/provider";
import {Link, LinkProps, NavLink, NavLinkProps} from 'react-router-dom';
import {forwardRef} from 'react';
import {TFieldValidation} from "./ui-lib/config/models";
import {InternalFieldErrors} from 'react-hook-form';

// Инициализация SDK
WebApp.ready();

const LinkBehavior = forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'> & {
    href: LinkProps['to']
}>((props, ref): JSX.Element => {
    const {href, ...other} = props;

    return <Link ref={ref} to={href} {...other} />;
});

const NavigationBehavior = forwardRef<HTMLAnchorElement, Omit<NavLinkProps, 'to'> & { href: NavLinkProps['to'] }>(
    (props, ref): JSX.Element => {
        const {href, ...other} = props;

        return <NavLink ref={ref} to={href} {...other} />;
    }
);


const getByPath = (source: any, path: string[], defaultValue = undefined) => {
    let current = source;

    for (let i = 0; i < path.length; i++) {
        if (!current[path[i]]) return defaultValue;

        current = current[path[i]];
    }

    return current;
};


const fieldValidation: TFieldValidation<InternalFieldErrors> = (errors = {}, props) => {
    if (!errors) return {invalid: false, message: ''};

    const {name} = props;

    if (!name) throw Error('У поля отсутствует name');
    const field = getByPath(errors, name.split('.'));

    return {invalid: !!field, message: field?.message};
};

const config = uiConfig({
    Link: {component: LinkBehavior},
    LinkNavigation: {component: NavigationBehavior},
    modal: {overlayClassName: 'backdrop-blur bg-white-70'},
    drawer: {overlayClassName: 'backdrop-blur bg-white-70'},
    fieldValidation
});


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <UIProvider config={config}>
            <App/>
        </UIProvider>
    </StrictMode>,
)
