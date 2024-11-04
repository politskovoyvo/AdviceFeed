import { TSafeZoneKeys } from '../../../config/models';
import { TailwindObject } from '../../../models';
import { TToastPosition } from '../models';
export declare const ToastContainerPosition: TailwindObject<TToastPosition>;
export declare const ToastSafeContainerKeys: {
    [key in TToastPosition]: TSafeZoneKeys[];
};
