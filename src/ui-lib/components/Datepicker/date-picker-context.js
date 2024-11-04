import { createContext, useContext } from 'react';

const DatePickerContext = createContext(undefined);
function useDatePickerContext() {
    const context = useContext(DatePickerContext);
    if (!context) {
        throw new Error('Нет DatePickerContext.Provider');
    }
    return context;
}

export { DatePickerContext, useDatePickerContext };
