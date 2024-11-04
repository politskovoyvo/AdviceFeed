import { createContext, useContext } from 'react';

const MenuContext = createContext(undefined);
function useMenuContext() {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('Нет MenuContext.provider');
    }
    return context;
}

export { MenuContext, useMenuContext };
