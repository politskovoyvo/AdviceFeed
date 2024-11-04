import { createContext, useContext } from 'react';

const UploadContext = createContext(undefined);
function useUploadContext() {
    const context = useContext(UploadContext);
    if (!context) {
        throw Error('Нет UploadContext.Provider');
    }
    return context;
}

export { UploadContext, useUploadContext };
