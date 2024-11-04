import { createContext, useContext } from 'react';

const GalleryContext = createContext(undefined);
function useGalleryContext() {
    const context = useContext(GalleryContext);
    if (!context) {
        throw Error('Нет GalleryContext.Provider');
    }
    return context;
}

export { GalleryContext, useGalleryContext };
