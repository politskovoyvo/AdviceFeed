import { jsx } from 'react/jsx-runtime';
import { ThemeIcon } from '../../icons/application/theme.icon.js';
import { getColorPreference, toggleTheme } from '../../utils/methods/theme.js';
import './easings.min.css.js';
import './theme-switch-style.css.js';

const UIThemeSwitch = (props) => {
    const theme = getColorPreference();
    return (jsx("button", { onClick: toggleTheme, className: `theme-toggle ${props.className ?? ''}`, id: "theme-toggle", title: "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043C\u0443", "aria-label": theme, "aria-live": "polite", children: jsx(ThemeIcon, {}) }));
};

export { UIThemeSwitch };
