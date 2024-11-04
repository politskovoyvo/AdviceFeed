import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useMemo, useRef, useEffect } from 'react';
import { MediaScreens } from '../../utils/consts/media-screens.js';
import { useDisclosure } from '../../utils/hooks/use-disclosure.js';
import { useMediaQuery } from '../../utils/hooks/use-media-query.js';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { UIDrawer } from '../Drawer/Drawer.js';
import '../Drawer/Drawer-content.js';
import '../Drawer/drawer-context.js';
import '../Drawer/Drawer-footer.js';
import '../Drawer/Drawer-header.js';
import { UIMobileDrawer } from '../Mobile-drawer/Mobile-drawer.js';
import { UIMobileDrawerContent } from '../Mobile-drawer/Mobile-drawer-content.js';
import '../Mobile-drawer/mobile-drawer-context.js';
import '../Mobile-drawer/Mobile-drawer-footer.js';
import { UIMobileDrawerHeader } from '../Mobile-drawer/Mobile-drawer-header.js';
import { UIPopover } from '../Popover/Popover.js';
import { UIPopoverContent } from '../Popover/Popover-content.js';
import { UIPopoverTrigger } from '../Popover/Popover-trigger.js';
import { SelectProvider } from './Select-context.js';
import { SelectDropdown } from './Select-dropdown.js';
import { SelectLabel } from './Select-label.js';
import { SelectMobileDrawer } from './Select-mobile-drawer.js';
import { SelectMobileModal } from './Select-mobile-modal.js';
import { useSelect } from './use-select.js';

const UISelect = (props) => {
    const { wrapRef: wrapRefProp, theme = 'default', fieldSize = 'medium', maxOptionsOverflow = 4, resetButton = false, dropdownClassName = '', placeholder = '', strategy, selectedTemplate, optionTemplate, dropdownInnerStyle, coveragePlaceholder, coveragePostfix, dropdownTitle, compress, open: openProp = false, setOpen: setOpenProp, ...rest } = props;
    const isCovered = !!(coveragePlaceholder || coveragePostfix);
    const [open, setOpen] = useState(openProp);
    const onClose = () => {
        setOpen(false);
        setOpenProp?.(false);
    };
    const disclosure = useDisclosure({ isOpen: open, close: onClose });
    const { htmlProps, ...ctx } = useSelect({ ...rest, disclosure });
    const { className = '', ...restProps } = htmlProps;
    const context = useMemo(() => ctx, [ctx]);
    const ref = useRef(null);
    const wrapRef = mergeRefs(ref, wrapRefProp);
    const onOpen = () => {
        setOpen(true);
        setOpenProp?.(true);
    };
    const onToggle = () => {
        if (context.disabled || context.loading || (isCovered && context.selected.length) || (disclosure.isOpen && context.searchable))
            return;
        if (disclosure.isOpen) {
            onClose();
        }
        else {
            onOpen();
        }
    };
    const [isMd] = useMediaQuery(MediaScreens.md);
    useEffect(() => {
        setOpen(openProp);
    }, [openProp]);
    return (jsxs(SelectProvider, { value: context, children: [jsxs(UIPopover, { toggleShow: false, isOpen: (!context.autocomplete || (context.autocomplete && !!context.charsCount && !!context.queryList)) && isMd && disclosure.isOpen, open: disclosure.open, close: disclosure.close, placement: 'bottom-start', strategy: strategy, children: [jsx(UIPopoverTrigger, { children: jsx(SelectLabel, { onClick: onToggle, className: className, ref: wrapRef, fieldSize: fieldSize, theme: theme, compress: compress, selectedTemplate: selectedTemplate, placeholder: placeholder, coveragePlaceholder: coveragePlaceholder, coveragePostfix: coveragePostfix, ...restProps }) }), jsx(UIPopoverContent, { custom: true, children: jsx(SelectDropdown, { fieldSize: fieldSize, optionTemplate: optionTemplate, innerStyle: { ...{ minWidth: `${ref.current?.clientWidth}px` }, ...dropdownInnerStyle }, className: dropdownClassName, maxOptionsOverflow: maxOptionsOverflow, resetButton: resetButton }) })] }), jsxs(UIMobileDrawer, { isOpen: disclosure.isOpen && !isMd && !context.searchable, open: disclosure.open, close: disclosure.close, children: [jsx(UIMobileDrawerHeader, { children: dropdownTitle }), jsx(UIMobileDrawerContent, { className: 'relative flex w-full flex-col gap-1 overflow-auto px-2', noneStyles: true, children: jsx(SelectMobileDrawer, { optionTemplate: optionTemplate, fieldSize: fieldSize }) })] }), jsx(UIDrawer, { position: 'full', afterOpen: () => context.inputRef.current?.focus(), isOpen: disclosure.isOpen && !isMd && context.searchable, open: disclosure.open, close: disclosure.close, closable: false, noneStyles: true, children: jsx(SelectMobileModal, { placeholder: placeholder, optionTemplate: optionTemplate, fieldSize: fieldSize, dropdownTitle: dropdownTitle, theme: theme, className: className, selectedTemplate: selectedTemplate }) })] }));
};
UISelect.displayName = 'UISelect';

export { UISelect };
