const InputColorsLabel = {
    default: 'bg-walentine-500 has-[:disabled]:placeholder-rus-300 border-transparent focus-within:border-primary-600 hover:disabled:border-transparent hover:border-primary-400 focus-within:bg-transparent focus-within:hover:border-primary-600 has-[:disabled]:border-none has-[:disabled]:bg-walentine-200 disabled:bg-walentine-200 ' +
        'dark:bg-yuri-200 dark:disabled:bg-yuri-300 dark:has-[:disabled]:bg-yuri-300 dark:hover:border-primary-1400 dark:disabled:hover:border-transparent dark:focus-within:bg-transparent dark:hover:bg-transparent dark:hover:disabled:bg-yuri-300 dark:focus-within:border-primary-700 dark:focus-within:hover:border-primary-600',
    transparent: 'bg-transparent border-transparent hover:border-primary-400 has-[:disabled]:bg-walentine-400 disabled:hover:border-transparent has-[:disabled]:hover:border-transparent focus-within:hover:border-primary-600 focus-within:border-primary-600 ' +
        'dark:disabled:bg-yuri-300 dark:has-[:disabled]:bg-yuri-300 dark:hover:border-primary-1400 dark:disabled:hover:border-transparent dark:has-[:disabled]:hover:border-transparent dark:focus-within:hover:border-primary-600',
    outline: 'bg-transparent border-rus-100 hover:border-primary-400 hover:disabled:border-walentine-500 hover:has-[:disabled]:border-walentine-500 focus-within:border-primary-600 focus-within:hover:border-primary-600 has-[:disabled]:border-walentine-500 disabled:border-walentine-500 ' +
        'dark:border-rus-800 dark:disabled:border-yuri-200 dark:has-[:disabled]:border-yuri-200 dark:hover:border-primary-1400 dark:hover:disabled:border-yuri-200 dark:focus-within:border-primary-600 dark:focus-within:hover:border-primary-600'
};
const InputColorsIcon = {
    default: '',
    transparent: '',
    outline: 'text-primary-700'
};
const InputColorsInput = {
    default: 'text-yuri-100 placeholder-rus-800 disabled:text-yuri-100 ' +
        'dark:text-walentine-500 dark:placeholder-rus-600 dark:disabled:placeholder-walentine-400',
    transparent: 'text-primary-700 placeholder-primary-700 disabled:text-yuri-100 disabled:placeholder-rus-800 ' +
        'dark:text-primary-700 dark:disabled:text-walentine-400 dark:placeholder-primary-700 dark:placeholder-primary-800 dark:disabled:placeholder-walentine-500',
    outline: 'text-yuri-100 placeholder-rus-800 disabled:placeholder-yuri-1000 disabled:text-yuri-100 ' +
        'dark:text-rus-200 dark:placeholder-rus-600 dark:disabled:placeholder-walentine-500'
};

export { InputColorsIcon, InputColorsInput, InputColorsLabel };
