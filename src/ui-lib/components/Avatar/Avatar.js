import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { forwardRef, useState, useEffect } from 'react';
import { getLettersColor } from './methods/colors.js';
import { AvatarSize } from './tailwind-variations/size.js';

const UIAvatar = forwardRef(({ url, userName, size = 'medium' }, ref) => {
    const classes = `${AvatarSize[size]} `;
    const [letters, setLetters] = useState(null);
    const [bgColor, setBgColor] = useState('');
    useEffect(() => {
        if (letters) {
            setBgColor(getLettersColor(letters[0], letters[1] ?? 'W'));
        }
        else {
            setBgColor('');
        }
    }, [letters]);
    useEffect(() => {
        if (url) {
            setLetters(null);
        }
        else {
            userName = userName ? userName : 'W B';
            setLetters(userName?.split(' ').map((l) => l.charAt(0)));
        }
    }, [url]);
    return (jsxs("div", { ref: ref, className: `${bgColor} ${classes} flex items-center justify-center overflow-hidden rounded-full text-walentine-100`, children: [letters && (jsxs(Fragment, { children: [jsx("span", { children: letters[0] }), " ", jsx("span", { children: letters[1] })] })), url && jsx("img", { decoding: "async", className: 'min-h-full object-cover', src: url, alt: userName })] }));
});
UIAvatar.displayName = 'UIAvatar';

export { UIAvatar };
