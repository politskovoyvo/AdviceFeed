import { UIDrawer } from '../../../components/Drawer/Drawer.js';
import { UIDrawerContent } from '../../../components/Drawer/Drawer-content.js';
import '../../../components/Drawer/drawer-context.js';
import { UIDrawerFooter } from '../../../components/Drawer/Drawer-footer.js';
import { UIDrawerHeader } from '../../../components/Drawer/Drawer-header.js';
import 'react';
import { UIMobileDrawer } from '../../../components/Mobile-drawer/Mobile-drawer.js';
import { UIMobileDrawerContent } from '../../../components/Mobile-drawer/Mobile-drawer-content.js';
import '../../../components/Mobile-drawer/mobile-drawer-context.js';
import { UIMobileDrawerFooter } from '../../../components/Mobile-drawer/Mobile-drawer-footer.js';
import { UIMobileDrawerHeader } from '../../../components/Mobile-drawer/Mobile-drawer-header.js';
import { UIModal } from '../../../components/Modal/Modal.js';
import { UIModalContent } from '../../../components/Modal/Modal-content.js';
import '../../../components/Modal/modal-context.js';
import { UIModalFooter } from '../../../components/Modal/Modal-footer.js';
import { UIModalHeader } from '../../../components/Modal/Modal-header.js';

const DIALOG_HEADER = {
    [UIModal.displayName]: UIModalHeader,
    [UIDrawer.displayName]: UIDrawerHeader,
    [UIMobileDrawer.displayName]: UIMobileDrawerHeader
};
const DIALOG_CONTENT = {
    [UIModal.displayName]: UIModalContent,
    [UIDrawer.displayName]: UIDrawerContent,
    [UIMobileDrawer.displayName]: UIMobileDrawerContent
};
const DIALOG_FOOTER = {
    [UIModal.displayName]: UIModalFooter,
    [UIDrawer.displayName]: UIDrawerFooter,
    [UIMobileDrawer.displayName]: UIMobileDrawerFooter
};

export { DIALOG_CONTENT, DIALOG_FOOTER, DIALOG_HEADER };
