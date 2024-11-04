import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { runIfFn } from '../../utils/methods/run-if-fn.js';
import { useWay } from './use-two-way-switcher.js';

const UIWay = forwardRef((props, ref) => {
    const { className = '', children, empty = false, ...rest } = props;
    const { selected, disabled } = useWay();
    const classNames = !empty ? 'aria-selected:text-primary-700 text-yuri-400 text-base' : '';
    return (jsx("div", { ref: ref, className: `${className} ${classNames} transition-all`, "aria-selected": selected, "aria-disabled": disabled, children: runIfFn(children, { disabled, selected }) }));
});
UIWay.displayName = 'UIWay';

export { UIWay };
