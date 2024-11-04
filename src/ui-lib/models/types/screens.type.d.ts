type VariantsType = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
/**
 * 'sm' => @media (min-width: 640px) { ... }
 *
 * 'md' => @media (min-width: 768px) { ... }
 *
 * 'lg' => @media (min-width: 1024px) { ... }
 *
 * 'xl' => @media (min-width: 1280px) { ... }
 *
 * '2xl' => @media (min-width: 1536px) { ... }
 */
export type ScreensType = {
    [key in VariantsType]?: string;
};
export {};
