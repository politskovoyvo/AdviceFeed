import { createContext, useContext } from 'react';

const RadioContext = createContext({
    value: '',
    name: ''
});
function useRadioContext() {
    const context = useContext(RadioContext);
    if (!context) {
        throw new Error('Без UIReactGroup не получится');
    }
    return context;
}

export { RadioContext, useRadioContext };
