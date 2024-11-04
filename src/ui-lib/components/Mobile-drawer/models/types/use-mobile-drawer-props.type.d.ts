import { IDrawerProps } from '../../../Drawer/models';
export type TUseMobileDrawerProps = Omit<IDrawerProps, 'position'> & {
    /** Если expandable, то состоние на ините
     * @default false */
    expandedDefault?: boolean;
    /** Если ил у шторки 2 состояния по высоте сжатого(40%) и раскрытого(95%)
     * @default true */
    expandable?: boolean;
    /** Возможность перетаскивать за "ручку"
     * @default false
     * */
    draggable?: boolean;
};
