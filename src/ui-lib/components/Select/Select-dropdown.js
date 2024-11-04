import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { forwardRef, useRef, useState, useEffect } from 'react';
import { UIButton } from '../Button/Button.js';
import { useSelectContext } from './Select-context.js';
import { SelectList } from './Select-list.js';
import { SelectSizesDropDown } from './tailwind-variations/sizes.js';

const SelectDropdown = forwardRef((props, ref) => {
    const { removeAll, queryList, selected, multiply } = useSelectContext();
    const devRef = useRef(null);
    const dropdownClasses = `${SelectSizesDropDown[props.fieldSize]}`;
    const [maxHeight, setMaxHeight] = useState(9999);
    const handleClickRemove = (event) => {
        event.stopPropagation();
        removeAll();
    };
    useEffect(() => {
        if (ref) {
            if (typeof ref === 'function') {
                ref(devRef.current);
            }
            else {
                ref.current = devRef.current;
            }
        }
    }, [ref]);
    useEffect(() => {
        if (devRef?.current) {
            const child = devRef.current.firstElementChild;
            if (child) {
                const itemsHeight = child.clientHeight * props.maxOptionsOverflow;
                setMaxHeight(itemsHeight);
            }
        }
    }, [props.fieldSize, ref]);
    return (jsxs("div", { style: { ...props.innerStyle }, className: `${props.className ?? ''} ${dropdownClasses} z-30 flex flex-col overflow-hidden rounded-lg bg-walentine-100 shadow-md2 shadow-walentine-500 dark:bg-yuri-400`, children: [jsx("div", { ref: devRef, style: { maxHeight: `${maxHeight}px` }, className: "flex flex-col overflow-auto", children: jsx(SelectList, { ...props }) }), !!queryList?.length && props.resetButton && (jsxs(Fragment, { children: [jsx("hr", { className: "border-walentine-500 dark:border-yuri-100" }), jsx("div", { className: "flex w-full items-center justify-center bg-walentine-100", children: jsx(UIButton, { type: "button", theme: "empty", disabled: !selected.length, className: `w-full py-2 ${!selected.length ? 'font-medium text-rus-300' : 'text-primary-800'}`, onClick: handleClickRemove, children: multiply ? 'Сбросить все' : 'Сбросить' }) })] }))] }));
});
SelectDropdown.displayName = 'SelectDropdown';

export { SelectDropdown };
