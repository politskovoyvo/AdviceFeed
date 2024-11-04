import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { CheckFillIcon } from '../../icons/suggested/check-fill.icon.js';
import { ExclamationCircleFillIcon } from '../../icons/suggested/exclamation-circle-fill.icon.js';
import { useAlertContext } from './alert-context.js';
import { AlertIconColor } from './tailwind-variations/color.js';

const ICONS = {
    info: ExclamationCircleFillIcon,
    warning: ExclamationCircleFillIcon,
    success: CheckFillIcon,
    error: ExclamationCircleFillIcon
};
const UIAlertIcon = forwardRef((props, ref) => {
    const { className = '', icon, ...rest } = props;
    const { status } = useAlertContext();
    const StatusIcon = icon ?? ICONS[status];
    const classNames = `${AlertIconColor[status]} ${className} text-i-20 md:text-i-24`;
    return jsx(StatusIcon, { ref: ref, className: classNames, ...rest });
});
UIAlertIcon.displayName = 'UIAlertIcon';

export { UIAlertIcon };
