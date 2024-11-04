import type { IDrawerHeaderProps } from '../../../../components/Drawer/models';
import type { TMobileDrawerHeaderProps } from '../../../../components/Mobile-drawer/models';
import type { IModalHeaderProps } from '../../../../components/Modal/models';
export type TDialogHeaderProps = IModalHeaderProps | IDrawerHeaderProps | TMobileDrawerHeaderProps;
