import { createContext, useContext } from 'react';

const CarouselContext = createContext(undefined);
function useCarouselContext() {
    const context = useContext(CarouselContext);
    if (!context) {
        throw new Error('Нет CarouselContext.provider');
    }
    return context;
}

export { CarouselContext, useCarouselContext };
