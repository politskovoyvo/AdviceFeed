import { HTMLAttributes } from 'react';
import { TMaybeRenderProps } from '../../../../models';
import { TSafeAny } from '../../../../utils/types';
export interface IWayProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    children?: TMaybeRenderProps<{
        selected: boolean;
        disabled: boolean;
    }>;
    /** @default false */
    empty?: boolean;
    value: TSafeAny;
    trackClassName?: string;
}
