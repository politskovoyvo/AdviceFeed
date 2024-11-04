import { ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import { TMessageMapped, TUseChatProps } from './models';
export declare function useChat(props: TUseChatProps): {
    message: string;
    messages: TMessageMapped[];
    textAreaRef: import("react").RefObject<HTMLTextAreaElement>;
    handleSubmit: (event?: FormEvent<HTMLFormElement>) => void;
    handleKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
    handleTextAreaChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};
