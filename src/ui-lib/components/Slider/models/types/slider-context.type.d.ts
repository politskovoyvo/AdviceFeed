import { TUseSliderReturn } from '../../use-slider';
export type TSliderContext = Omit<TUseSliderReturn, 'getInputProps' | 'getWrapProps' | 'onDragEnd' | 'onDragStart' | 'onDragMove' | 'modifiers' | 'sensors'>;
