import type { UIDrawerContent, UIDrawerFooter, UIDrawerHeader } from '../../../../components/Drawer';
import type { UIMobileDrawerContent, UIMobileDrawerFooter, UIMobileDrawerHeader } from '../../../../components/Mobile-drawer';
import type { UIModalContent, UIModalFooter, UIModalHeader } from '../../../../components/Modal';
export type TDialogHeaderChildren = typeof UIModalHeader | typeof UIDrawerHeader | typeof UIMobileDrawerHeader;
export type TDialogContentChildren = typeof UIModalContent | typeof UIDrawerContent | typeof UIMobileDrawerContent;
export type TDialogFooterChildren = typeof UIModalFooter | typeof UIDrawerFooter | typeof UIMobileDrawerFooter;
