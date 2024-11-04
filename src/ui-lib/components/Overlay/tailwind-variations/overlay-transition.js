const OverlayTransitions = {
    'top-start': `
  data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:-translate-y-3
  data-[leave]:ease-out data-[enter]:ease-in
  opacity-100 scale-100 translate-y-0 transform transition duration-150
  `,
    top: `
  data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:-translate-y-3
  data-[leave]:ease-out data-[enter]:ease-in
  opacity-100 scale-100 translate-y-0 transform transition duration-150
  `,
    'top-end': `
  data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:-translate-y-3
  data-[leave]:ease-out data-[enter]:ease-in
  opacity-100 scale-100 translate-y-0 transform transition duration-150
  `,
    'right-start': `
  data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:translate-x-3
  data-[leave]:ease-out data-[enter]:ease-in
  opacity-100 scale-100 translate-x-0 transform transition duration-150
  `,
    right: `
  data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:translate-x-3
  data-[leave]:ease-out data-[enter]:ease-in
  opacity-100 scale-100 translate-x-0 transform transition duration-150
  `,
    'right-end': `
  data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:translate-x-3
  data-[leave]:ease-out data-[enter]:ease-in
  opacity-100 scale-100 translate-x-0 transform transition duration-150
  `,
    'bottom-end': `
  data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:translate-y-3
  data-[leave]:ease-out data-[enter]:ease-in
  opacity-100 scale-100 translate-y-0 transform transition duration-150
  `,
    bottom: `
  data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:translate-y-3
  data-[leave]:ease-out data-[enter]:ease-in
  opacity-100 scale-100 translate-y-0 transform transition duration-150
  `,
    'bottom-start': `
  data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:translate-y-3
  data-[leave]:ease-out data-[enter]:ease-in
  opacity-100 scale-100 translate-y-0 transform transition duration-150
  `,
    'left-end': `
  data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:-translate-x-3
  data-[leave]:ease-out data-[enter]:ease-in
  opacity-100 scale-100 translate-x-0 transform transition duration-150
  `,
    left: `
  data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:-translate-x-3
  data-[leave]:ease-out data-[enter]:ease-in
  opacity-100 scale-100 translate-x-0 transform transition duration-150
  `,
    'left-start': `
  data-[closed]:opacity-0 data-[closed]:scale-95 data-[closed]:-translate-x-3
  data-[leave]:ease-out data-[enter]:ease-in
  opacity-100 scale-100 translate-x-0 transform transition duration-150
  `
};

export { OverlayTransitions };
