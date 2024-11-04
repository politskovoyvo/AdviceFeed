import { DependencyList, EffectCallback } from 'react';
/** Вызов только на апдейт, игнорирую инициализацию */
export declare const useUpdateEffect: (effect: EffectCallback, deps: DependencyList) => void;
