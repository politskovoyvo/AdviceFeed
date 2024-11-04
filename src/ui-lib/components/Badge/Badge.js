import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { BadgeColorThemeClasses } from './tailwind-variations/color-theme.js';
import { BadgeShapeClasses } from './tailwind-variations/shape.js';
import { BadgeSizeClasses } from './tailwind-variations/size.js';

const UIBadge = forwardRef(({ className = '', children, fieldSize = 'medium', shape = 'square', color = 'primary', theme = 'default' }, ref) => {
    const badgeClassName = `${BadgeSizeClasses[fieldSize]} ${BadgeShapeClasses[shape]} ${BadgeColorThemeClasses[theme][color]}`;
    return (jsx("span", { ref: ref, className: `flex items-center justify-center font-medium transition-all ${badgeClassName} ${className}`, children: children }));
});
UIBadge.displayName = 'UIBadge';

export { UIBadge };
