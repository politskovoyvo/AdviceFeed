import type { EventMap, IEvent } from 'yandex-maps';
type TEventMap = 'actionbegin' | 'actionbreak' | 'actionend' | 'actiontick' | 'actiontickcomplete' | keyof EventMap;
export interface IMapEvent {
    event: TEventMap | TEventMap[];
    callback: (event: IEvent<EventMap[keyof EventMap]>) => void;
}
export {};
