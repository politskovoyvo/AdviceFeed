import { jsx, jsxs } from 'react/jsx-runtime';
import { LoadingIcon } from '../../icons/application/loading.icon.js';
import { CheckFillIcon } from '../../icons/suggested/check-fill.icon.js';
import { CrossIcon } from '../../icons/suggested/cross.icon.js';
import { ExclamationCircleFillIcon } from '../../icons/suggested/exclamation-circle-fill.icon.js';
import { UIButton } from '../Button/Button.js';

const ToastComponent = ({ title, description, status = 'default', icon, isClosable, onClose }) => {
    const statusIcon = {
        default: jsx("span", { className: 'h-6 text-i-24 md:h-7 md:text-i-28', children: icon }),
        error: (jsx("span", { className: 'h-6 text-i-24 text-red-900 md:h-7 md:text-i-28', children: jsx(ExclamationCircleFillIcon, {}) })),
        info: (jsx("span", { className: 'h-6 rotate-180 text-i-24 text-primary-700 md:h-7 md:text-i-28', children: jsx(ExclamationCircleFillIcon, {}) })),
        loading: (jsx("span", { className: 'h-6 text-i-24 text-orange-300 md:h-7 md:text-i-28', children: jsx(LoadingIcon, {}) })),
        success: (jsx("span", { className: 'h-6 text-i-24 text-primary-700 md:h-7 md:text-i-28', children: jsx(CheckFillIcon, {}) })),
        warning: (jsx("span", { className: 'h-6 text-i-24 text-orange-300 md:h-7 md:text-i-28', children: jsx(ExclamationCircleFillIcon, {}) }))
    };
    return (jsxs("div", { className: 'flex gap-2.5', children: [statusIcon[status], jsxs("div", { className: 'flex flex-col', children: [title && (jsx("strong", { className: 'overflow-wrap-anywhere flex flex-1 items-center whitespace-pre-wrap text-sm font-semibold text-walentine-100 md:text-base', children: title })), description && (jsx("span", { className: 'overflow-wrap-anywhere flex flex-1 items-center whitespace-pre-wrap text-sm font-normal text-walentine-100 md:text-base', children: description }))] }), isClosable && (jsx("div", { className: 'pointer-events-auto absolute right-1.5 top-1.5', children: jsx(UIButton, { theme: 'icon', onClick: onClose, className: 'text-i-18 hover:bg-walentine-100/10', children: jsx(CrossIcon, {}) }) }))] }));
};

export { ToastComponent };
