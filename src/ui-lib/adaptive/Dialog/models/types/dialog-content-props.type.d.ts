import type { IDrawerContentProps } from '../../../../components/Drawer/models';
import type { TMobileDrawerContentProps } from '../../../../components/Mobile-drawer/models';
import type { IModalContentProps } from '../../../../components/Modal/models';
export type TDialogContentProps = IModalContentProps | IDrawerContentProps | TMobileDrawerContentProps;
