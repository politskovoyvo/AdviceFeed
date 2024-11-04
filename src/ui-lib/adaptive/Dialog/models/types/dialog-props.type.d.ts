import type { IDrawerProps } from '../../../../components/Drawer/models';
import type { TUseMobileDrawerProps } from '../../../../components/Mobile-drawer/models';
import type { IModalProps } from '../../../../components/Modal/models';
import type { TDialogScreens } from './index';
import type { TDialog } from './dialog.type';
export type TDialogProps = IModalProps & IDrawerProps & TUseMobileDrawerProps & {
    [key in TDialogScreens]?: TDialog;
};
