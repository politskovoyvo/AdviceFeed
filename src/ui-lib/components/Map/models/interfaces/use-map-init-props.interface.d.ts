import { TUseMapReturn } from '../../use-map';
import { IUseMapProps } from './use-map-props.interface';
export interface IUseMapInitProps extends Omit<IUseMapProps, 'id'> {
    id: string;
    map: TUseMapReturn;
}
