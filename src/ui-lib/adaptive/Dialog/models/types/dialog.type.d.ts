import type { UIDrawer } from '../../../../components/Drawer';
import type { UIMobileDrawer } from '../../../../components/Mobile-drawer';
import type { UIModal } from '../../../../components/Modal';
export type TDialog = typeof UIModal | typeof UIDrawer | typeof UIMobileDrawer;
