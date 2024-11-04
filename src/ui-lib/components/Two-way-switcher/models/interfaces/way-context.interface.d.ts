import { TSwitchColor } from '../../../Switch/models';
export interface IWayContext {
    selected: boolean;
    index: number;
    disabled: boolean;
    color?: TSwitchColor;
}
