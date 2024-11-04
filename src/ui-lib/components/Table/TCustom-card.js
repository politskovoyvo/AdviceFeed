import { jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useMemo, Fragment, useEffect } from 'react';
import { runIfFn } from '../../utils/methods/run-if-fn.js';
import { useTableContext } from './table-context.js';

const UITCustomCard = (props) => {
    const { compress, registerCustom } = useTableContext();
    const { children, data, className } = props;
    const childrenElements = useMemo(() => data.map((item, index) => jsx(Fragment, { children: runIfFn(children, item) }, index)), [data, children]);
    useEffect(() => {
        registerCustom();
    }, [registerCustom]);
    return jsx(Fragment$1, { children: compress && jsx("div", { className: className, children: childrenElements }) });
};

export { UITCustomCard };
