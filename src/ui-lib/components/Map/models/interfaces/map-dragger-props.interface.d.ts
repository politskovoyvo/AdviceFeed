import { IMapPlacemarkProps } from './map-placemark-props.interface';
export interface IMapDraggerProps extends IMapPlacemarkProps {
    onChangePosition?(coordinates: number[]): void;
    disabled?: boolean;
}
