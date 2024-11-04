import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { UISelect } from '../Select/Select.js';
import { usePaginationSize } from './use-pagination.js';

const UIPaginationSize = forwardRef((props, ref) => {
    const { optionsList, size, onChange, disabled, readOnly, htmlProps } = usePaginationSize(props);
    return (jsx("div", { ...htmlProps, ref: ref, children: !!size && optionsList.length && (jsx(UISelect, { className: 'w-fit', list: optionsList, disabled: disabled, onChange: onChange, value: size })) }));
});
UIPaginationSize.displayName = 'UIPaginationSize';

export { UIPaginationSize };
