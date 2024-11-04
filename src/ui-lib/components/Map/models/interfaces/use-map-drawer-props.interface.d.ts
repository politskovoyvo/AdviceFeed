import { IMapDrawerProps } from './map-drawer-props.interface';
export interface IUseMapDrawerProps extends Pick<IMapDrawerProps, 'zoom' | 'center' | 'value' | 'onChange' | 'onSubmit'> {
}
