import type { IDomEventEmitter, IEvent } from 'yandex-maps';
import { IMapEvent } from './models';
export declare function getEventCoordinates(event: IEvent): number[];
export declare function areNewProperties(oldProperties: any[] | object | null | undefined, newProperties: any[] | object | null | undefined): boolean;
export declare function addEvents(instance: IDomEventEmitter, events: IMapEvent[]): void;
