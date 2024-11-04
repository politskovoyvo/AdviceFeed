import { jsxs, jsx } from 'react/jsx-runtime';
import { Transition, TransitionChild } from '@headlessui/react';
import { forwardRef } from 'react';
import { useUploadDrag } from './use-upload.js';

const UploadDrag = forwardRef((props, ref) => {
    const { dragActive, state, labels, handleClick, handleDragOver, handleDragLeave, handleDragEnter, handleDrop } = useUploadDrag();
    return (jsxs("div", { "aria-busy": dragActive, className: 'group relative flex h-28 w-full cursor-pointer items-center justify-center rounded-lg border border-dashed border-rus-300 bg-transparent p-3 transition-all hover:border-primary-700 aria-busy:border-solid aria-busy:border-walentine-400 aria-busy:bg-walentine-400', ref: ref, onClick: handleClick, onDragEnter: handleDragEnter, onDragLeave: handleDragLeave, onDragOver: handleDragOver, onDrop: handleDrop, children: [jsx(Transition, { show: state.show, children: jsx("div", { className: 'absolute -bottom-px -left-px -right-px -top-px flex items-center justify-center rounded-lg bg-red-200 backdrop-blur-lg transition-all duration-150 ease-linear data-[closed]:opacity-0 data-[enter]:opacity-100', children: jsx(TransitionChild, { children: jsx("span", { className: 'whitespace-pre-line text-center text-base font-normal text-red-400 opacity-70 drop-shadow-lg transition-all duration-150 ease-linear data-[closed]:scale-75 data-[enter]:scale-100', children: state.message }) }) }) }), jsxs("div", { className: 'pointer-events-none flex flex-col items-center group-aria-busy:opacity-30', children: [jsx("div", { className: 'mb-2 text-i-28 text-yuri-400', children: jsx(labels.Icon, {}) }), jsxs("div", { className: 'flex flex-col items-center gap-1', children: [jsx("p", { className: 'text-base font-normal text-rus-500', children: labels.title }), labels.description && jsx("span", { className: 'text-base font-normal text-rus-500', children: labels.description })] })] })] }));
});
UploadDrag.displayName = 'UIUploadDrag';

export { UploadDrag };
