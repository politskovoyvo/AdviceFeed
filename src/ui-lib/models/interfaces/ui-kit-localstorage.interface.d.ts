export interface UIKitLocalStorage {
    theme?: 'dark' | 'light';
    animation?: 'no-preference' | 'reduced';
    nav?: {
        expanded?: boolean;
        opened?: number[];
    };
}
