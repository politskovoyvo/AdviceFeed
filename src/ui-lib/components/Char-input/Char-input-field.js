import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { CharInputSize } from './tailwind-variations/size.js';
import { CharInputTheme } from './tailwind-variations/theme.js';
import { useCharInputField } from './use-char-input.js';

const UICharInputField = forwardRef((props, ref) => {
    const { getInputProps, register, index, fieldSize, theme } = useCharInputField();
    const _ref = mergeRefs(register, ref);
    const classNames = `${CharInputSize[fieldSize]} ${CharInputTheme[theme]}`;
    return (jsx("input", { className: `${classNames} text-center outline-none aria-invalid:bg-red-500/5 aria-invalid:hover:border-red-500 aria-invalid:focus:border-red-500`, ...getInputProps({ ...props, index }, _ref) }));
});
UICharInputField.displayName = 'UICharInputField';

export { UICharInputField };
