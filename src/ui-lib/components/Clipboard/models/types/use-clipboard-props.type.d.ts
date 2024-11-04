import { IClipboardProps } from '../interfaces';
export type TUseClipboardProps = Omit<IClipboardProps, 'children' | 'className' | 'custom' | 'showIcon'>;
