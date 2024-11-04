import { createContext, useContext } from 'react';

const RateContext = createContext(undefined);
function useRateContext() {
    const context = useContext(RateContext);
    if (!context) {
        throw Error('Нет RateContext');
    }
    return context;
}

export { RateContext, useRateContext };
