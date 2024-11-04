import { createContext, useContext } from 'react';

const MapContext = createContext(undefined);
function useMapContext() {
    const context = useContext(MapContext);
    if (!context) {
        throw Error('Нет MapContext.Provider');
    }
    return context;
}

export { MapContext, useMapContext };
