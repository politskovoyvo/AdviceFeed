import { ButtonHTMLAttributes } from 'react';
import { ITooltipProps } from '../Tooltip/models';
import { TUseClipboardProps } from './models';
export declare function useClipboard(props: TUseClipboardProps): {
    tooltipProp: Omit<ITooltipProps, "children">;
    buttonProps: ButtonHTMLAttributes<HTMLButtonElement>;
};
