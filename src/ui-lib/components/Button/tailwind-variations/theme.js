const buttonTheme = {
    primary: 'rounded-lg bg-primary-700 border-primary-700 dark:disabled:bg-yuri-200 dark:disabled:border-none disabled:bg-walentine-500 disabled:border-walentine-500 enabled:hover:bg-primary-800 enabled:active:bg-primary-700 enabled:active:border-primary-700 enabled:hover:border-primary-800 ease-in-out duration-150 h-fit',
    red: 'dark:disabled:border-none rounded-lg dark:disabled:bg-yuri-200 bg-red-400 border-red-400 disabled:bg-walentine-500 disabled:border-walentine-500 enabled:hover:brightness-95 dark:enabled:hover:brightness-110 ease-in-out duration-150 h-fit',
    green: 'dark:disabled:border-none dark:disabled:bg-yuri-200 rounded-lg bg-green-200 border-green-200 disabled:bg-walentine-500 disabled:border-walentine-500 enabled:hover:brightness-95 dark:enabled:hover:brightness-110 ease-in-out duration-150 h-fit',
    transparent: 'rounded-lg dark:disabled:border-none disabled:bg-walentine-500 disabled:border-walentine-500 border-transparent dark:disabled:bg-yuri-200',
    outline: 'rounded-lg disabled:dark:border-yuri-300 bg-transparent border-primary-700 disabled:border-walentine-500 enabled:hover:brightness-75 dark:enabled:hover:brightness-125 ease-in-out duration-150 h-fit',
    icon: 'rounded-lg aria-pressed:enabled:hover:bg-walentine-300 aria-pressed:enabled:active:hover:bg-walentine-500 transition-all',
    empty: '',
    common: 'rounded-lg bg-walentine-100 dark:disabled:border-none dark:disabled:bg-yuri-200 dark:bg-yuri-400 dark:border-yuri-300 border-rus-100 disabled:bg-walentine-500 disabled:border-walentine-500 enabled:hover:bg-walentine-400 dark:enabled:hover:bg-walentine-300 enabled:active:bg-rus-100 enabled:active:border-rus-100 enabled:hover:border-rus-100 dark:enabled:hover:border-yuri-100 ease-in-out duration-150 h-fit',
    link: 'underline underline-offset-0 hover:underline-offset-1 decoration-transparent hover:decoration-primary-700 enabled:active:decoration-primary-800'
};
const fontTheme = {
    primary: 'text-walentine-100 group-disabled:dark:text-rus-600 group-disabled:text-rus-400',
    red: 'text-walentine-100 group-disabled:text-rus-400 group-disabled:dark:text-rus-600',
    green: 'text-green-800 group-disabled:text-rus-400 group-disabled:dark:text-rus-600 group-disabled:text-rus-400',
    transparent: 'text-yuri-400 dark:text-walentine-100 group-disabled:text-rus-400 group-disabled:dark:text-rus-600',
    outline: 'text-primary-700 group-disabled:text-rus-400 group-disabled:dark:text-rus-600',
    icon: '',
    empty: '',
    common: 'text-yuri-400 dark:group-disabled:text-rus-600 dark:text-walentine-200 group-disabled:text-rus-400',
    link: 'text-primary-700 dark:group-disabled:text-rus-600 group-enabled:group-active:text-primary-800'
};

export { buttonTheme, fontTheme };
