import plugin$1 from 'tailwindcss/plugin';
import uiConfig from './tailwind.config.js';

const creator = ({ matchUtilities, addUtilities, theme }) => {
    matchUtilities({
        'overflow-wrap': (value) => ({
            overflowWrap: value
        })
    }, { values: theme('overflowWrap') });
    addUtilities({
        ':is(html[animation="reduced"]) *': {
            transition: 'none !important'
        },
        'input:disabled, textarea:disabled, input:disabled::placeholder, textarea:disabled::placeholder': {
            opacity: '0.4' /* У Сафари стоит 0.4, поэтому назначаем по дефолту всем и оставляем черный цвет тексту */
        },
        'input, button, label': {
            '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
        },
        '.prevent-scroll': {
            'touch-action': 'none',
            '-webkit-overflow-scrolling': 'none',
            overflow: 'hidden',
            'overscroll-behavior': 'none',
            '-ms-touch-action': 'none'
        },
        '.hide-arrow': {
            'stroke-dashoffset': '-114%',
            'stroke-dasharray': '114%'
        },
        '.show-arrow': {
            'stroke-dashoffset': '0%',
            'stroke-dasharray': '114%'
        },
        '#ui-root-container': {
            position: 'absolute',
            top: '0',
            left: '0'
        },
        '.scrollbar-hidden': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none'
        },
        '.scrollbar-hidden::-webkit-scrollbar': {
            display: 'none'
        },
        ':is(.dark ymaps.ymaps-2-1-79-map) canvas': {
            filter: 'invert(1) grayscale(1)'
        },
        ':is(.dark ymaps.ymaps-2-1-79-map) .ymaps-2-1-79-inner-panes': {
            filter: 'invert(1) grayscale(1)'
        },
        ':is(.dark ymaps.ymaps-2-1-79-map) .ymaps-2-1-79-map-bg': {
            background: '#454549'
        },
        ':is(.dark) .placemark::after': {
            background: '#fff'
        },
        '.placemark > svg': {
            transition: 'all 300ms',
            transform: 'translateY(0)'
        },
        '.placemark::after': {
            transition: 'all 300ms',
            background: '#000',
            'border-radius': '300px/134px',
            bottom: '0',
            content: "''",
            height: '5px',
            'z-index': '-1',
            left: '15px',
            opacity: '0',
            position: 'absolute',
            width: '9px'
        },
        '.placemark.drag > svg': {
            transform: 'translateY(-6px)'
        },
        '.placemark.drag::after': {
            opacity: '.6'
        }
    });
};
const theme = {
    overflowWrap: {
        normal: 'normal',
        break: 'break',
        anywhere: 'anywhere'
    }
};
var plugin = plugin$1(creator, {
    darkMode: 'class',
    theme: { ...theme, ...uiConfig.theme }
});

export { plugin as default };
