import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { forwardRef, useMemo, useState, useEffect } from 'react';
import { IMask } from 'react-imask';
import { CalendarIcon } from '../../icons/application/calendar.icon.js';
import { MediaScreens } from '../../utils/consts/media-screens.js';
import { useDisclosure } from '../../utils/hooks/use-disclosure.js';
import { useMediaQuery } from '../../utils/hooks/use-media-query.js';
import { defaultDatePicker, formatDate, ruToDate } from '../../utils/methods/date.js';
import '../Input/Input.js';
import { UIInputMask } from '../Input/input-mask.js';
import { UIMobileDrawer } from '../Mobile-drawer/Mobile-drawer.js';
import { UIMobileDrawerContent } from '../Mobile-drawer/Mobile-drawer-content.js';
import '../Mobile-drawer/mobile-drawer-context.js';
import '../Mobile-drawer/Mobile-drawer-footer.js';
import '../Mobile-drawer/Mobile-drawer-header.js';
import { UIPopover } from '../Popover/Popover.js';
import { UIPopoverContent } from '../Popover/Popover-content.js';
import { UIPopoverTrigger } from '../Popover/Popover-trigger.js';
import { DatePickerContext } from './date-picker-context.js';
import { DatePickerDropdown } from './date-picker-dropdown.js';

const UIDatePicker = forwardRef(({ theme, closeAfterSelect = true, value, ...props }, ref) => {
    const context = useMemo(defaultDatePicker, []);
    const { open, close, isOpen, toggle } = useDisclosure();
    const [selected, setSelected] = useState(() => (value ? formatDate(ruToDate(value), 'YYYY-MM-dd') : ''));
    const [dateString, setDateString] = useState(() => (value ? formatDate(ruToDate(value), 'dd.MM.YYYY') : ''));
    const mask = {
        mask: Date,
        pattern: 'd{.}`m{.}`Y',
        blocks: {
            d: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 31,
                maxLength: 2
            },
            m: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2
            },
            Y: {
                mask: IMask.MaskedRange,
                from: 1900,
                to: 9999,
                maxLength: 4
            }
        },
        lazy: true
    };
    const handleComplete = (date) => {
        const realDate = ruToDate(date);
        const dateISO = formatDate(realDate, 'YYYY-MM-dd');
        setSelected(dateISO);
    };
    const handleSelectDate = (date) => {
        setDateString(formatDate(date, 'dd.MM.YYYY'));
        if (closeAfterSelect) {
            close();
        }
    };
    const calendarPostfix = (jsx("div", { className: 'text-i-24 text-walentine-500', children: jsx(CalendarIcon, {}) }));
    const [isMd] = useMediaQuery(MediaScreens.md);
    useEffect(() => {
        const date = value ? String(value) : '';
        setDateString(date ? formatDate(ruToDate(date), 'dd.MM.YYYY') : '');
        setSelected(date ? formatDate(ruToDate(date), 'YYYY-MM-dd') : '');
    }, [value]);
    return (jsx(Fragment, { children: jsxs(DatePickerContext.Provider, { value: context, children: [jsxs(UIPopover, { isIgnoreTouches: true, toggleShow: false, open: open, close: close, isOpen: isMd && isOpen, strategy: 'fixed', placement: 'bottom-start', children: [jsx(UIPopoverTrigger, { targetRefName: 'labelRef', children: jsx(UIInputMask, { ref: ref, autoComplete: 'off', theme: theme, onClick: toggle, mask: mask, inputMode: 'numeric', onComplete: handleComplete, fieldPostfix: calendarPostfix, value: dateString, readOnly: true, ...props }) }), jsx(UIPopoverContent, { custom: true, children: jsx(DatePickerDropdown, { selectedDate: selected, onSelectDate: handleSelectDate }) })] }), jsx(UIMobileDrawer, { isOpen: !isMd && isOpen, open: open, close: close, expandable: false, children: jsx(UIMobileDrawerContent, { className: 'w-full px-2', noneStyles: true, children: jsx(DatePickerDropdown, { selectedDate: selected, onSelectDate: handleSelectDate }) }) })] }) }));
});
UIDatePicker.displayName = 'UIDatePicker';

export { UIDatePicker };
