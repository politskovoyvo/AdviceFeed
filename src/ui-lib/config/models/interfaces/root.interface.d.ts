import { TSafeZoneKeys } from '../types';
export interface IRoot {
    root: {
        id: string;
    };
    safeZone: {
        [key in TSafeZoneKeys]: string;
    };
    fixedTheme?: 'light' | 'dark';
    animation?: 'no-preference' | 'reduced';
}
