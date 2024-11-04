import { HTMLAttributes } from 'react';
import { TAlertStatus } from '../types';
export interface IAlertProps extends HTMLAttributes<HTMLDivElement> {
    status: TAlertStatus;
}
