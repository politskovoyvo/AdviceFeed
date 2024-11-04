import { KeyboardEventHandler, ReactNode, Ref } from 'react';
export interface IUseTabListProps {
    children?: ReactNode;
    onKeyDown?: KeyboardEventHandler;
    ref?: Ref<any>;
}
