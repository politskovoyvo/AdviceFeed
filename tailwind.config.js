import defaultTheme from 'tailwindcss/defaultTheme';
import {colorPalette} from './src/ui-lib/.tailwind/color-palette.js';
import {
    WalentineConfig,
    RusConfig,
    YuriConfig,
    PrimaryConfig,
    RedConfig,
    OrangeConfig,
    GreenConfig
} from './src/ui-lib/.tailwind/consts/default-color-configs.const.js';

// Метод по созданию значений для размеров и остальных числовых значений h-4, max-w-4 ...
// rem = px / 16(с дефолтными настройками в браузере); <--- Как получаем рем
// tailwind_number = rem * 4 <--- Как получаем то самое значение тайлвинда
/* То есть tailwind получается что 1 тайлвинда эквивалентен 1/4 rem(0.25rem)  */
// let countPX = (px) => {
//   const rem = px / 16;
//   const tl = rem * 4
//   return `${tl}: '${rem}rem', //${px}px`;
// };
var uiConfig = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            aria: {
                pressed: 'pressed="true"',
                invalid: 'invalid="true"',
                active: 'active="true"',
                modal: 'modal="true"',
                current: 'current="page"',
                indeterminate: 'checked="mixed"'
            },
            screens: {
                'only-phone': {min: '0px', max: '767px'}
            },
            letterSpacing: {
                0.18: '0.01125em',
                0.3: '0.01875em' // 0.3px
            },
            colors: {
                walentine: colorPalette('#ffffff', WalentineConfig),
                rus: colorPalette('#9D9D9D', RusConfig),
                yuri: colorPalette('#000000', YuriConfig),
                primary: colorPalette('#965EEB', PrimaryConfig),
                red: colorPalette('#ff0000', RedConfig),
                orange: colorPalette('#FF6B00', OrangeConfig),
                green: colorPalette('#209A1E', GreenConfig),
                transparent: 'transparent'
            },
            cursor: {
                inherit: 'inherit'
            },
            boxShadow: {
                default: '0px 0px 16px',
                focus: '0 0 0 5px',
                md2: ' 0px 4px 16px',
                purpleUp: '0px -1px 4px rgba(183, 80, 209, 0.4)',
                'drawer-mobile': '0px -7px 12px 0px',
                'black-dm': '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'black-around': '0px 2px 20px rgba(0, 0, 0, 0.04)'
            },
            fontFamily: {
                sans: ['"Noto Sans"', ...defaultTheme.fontFamily.sans]
            },
            fontSize: {
                '3xl': ['1.75rem', {lineHeight: '2.5rem'}],
                '3xs': ['0.625rem', {lineHeight: '0.75rem'}],
                '2xs': ['0.6875rem', {lineHeight: '1rem'}],
                'i-10': ['0.625rem', {lineHeight: '0.625rem'}],
                'i-12': ['0.75rem', {lineHeight: '0.75rem'}],
                'i-16': ['1rem', {lineHeight: '1rem'}],
                'i-18': ['1.125rem', {lineHeight: '1.125rem'}],
                'i-20': ['1.25rem', {lineHeight: '1.25rem'}],
                'i-22': ['1.375rem', {lineHeight: '1.375rem'}],
                'i-24': ['1.5rem', {lineHeight: '1.5rem'}],
                'i-28': ['1.75rem', {lineHeight: '1.75rem'}],
                'i-30': ['1.875rem', {lineHeight: '1.875rem'}],
                'i-32': ['2rem', {lineHeight: '2rem'}],
                'i-36': ['2.25rem', {lineHeight: '2.25rem'}],
                'i-40': ['2.5rem', {lineHeight: '2.5rem'}],
                'i-70': ['4.375rem', {lineHeight: '4.375rem'}]
            },
            gridTemplateRows: {
                0: '0fr',
                '1fr': '1fr'
            },
            gridTemplateColumns: {
                0: '0fr',
                '1fr': '1fr'
            },
            borderRadius: {
                2: '0.313rem',
                '4xl': '1.75rem'
            },
            lineHeight: {},
            padding: {
                0.75: '0.188rem',
                1.75: '0.438rem',
                2.25: '0.563rem',
                2.75: '0.688rem',
                3.25: '0.813rem',
                3.75: '0.938rem',
                4.5: '1.125rem',
                4.75: '1.188rem',
                5.5: '1.375rem',
                6.5: '1.625rem'
            },
            minWidth: {
                5.5: '1.375rem',
                10: '2.5rem' //40px
            },
            maxHeight: {
                'drawer-mobile': 'calc(var(--screen-height) * 0.92)',
                modal: 'calc(var(--screen-height) * 0.84)',
                screen: 'var(--screen-height)',
                viewport: 'var(--viewport-height)',
                inherit: 'inherit',
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%'
            },
            maxWidth: {
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
                20: '5rem',
                90: '22.5rem' //360px
            },
            width: {
                13: '3.25rem',
                20: '5rem',
                21.5: '5.375rem',
                23: '5.75rem',
                90: '22.5rem' //360px
            },
            height: {
                screen: 'var(--screen-height)',
                viewport: 'var(--viewport-height)',
                'safe-screen': 'calc(var(--screen-height) - var(--safe-zone))',
                'safe-viewport': 'calc(var(--viewport-height) - var(--safe-zone))' // Высота виьюпорта с отступом под достип высоту хедера
            },
            spacing: {
                0.25: '0.063rem',
                1.25: '0.313rem',
                5.5: '1.375rem',
                17: '4.25rem',
                18: '4.5rem',
                19: '4.75rem',
                21: '5.25rem',
                22: '5.5rem',
                23: '5.75rem',
                38: '9.5rem'
            },
            transitionProperty: {
                background: 'background',
                'border-color': 'border-color',
                border: 'border',
                height: 'height',
                width: 'width',
                padding: 'padding',
                'grid-template-rows': 'grid-template-rows',
                'grid-template-columns': 'grid-template-columns',
                'max-width': 'max-width',
                'max-height': 'max-height'
            },
            opacity: {
                8: '.08'
            },
            margin: {
                full: '100%'
            },
            rotate: {
                140: '140deg'
            },
            scale: {
                160: '1.6'
            },
            zIndex: {
                1: '1'
            },
            keyframes: {
                loader: {
                    '0%, 80%, 100%': {boxShadow: '0 16px 0 -24px'},
                    '40%': {boxShadow: '0 16px 0 0'}
                }
            }
        }
    },
    plugins: []
};

export {uiConfig as default};
