import { createContext, useContext } from 'react';

const ChatContext = createContext(undefined);
function useChatContext() {
    const context = useContext(ChatContext);
    if (!context) {
        throw Error('Нет ChatContext.Provider');
    }
    return context;
}

export { ChatContext, useChatContext };
