import { getLocalStorageValue, setLocalStorageValue } from './ui-kit-localstorage.js';

const animationReduceMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
let animation = 'no-preference';
const reflectPreference = () => {
    document.documentElement.setAttribute('animation', getLocalStorageValue('animation') ?? animation);
};
const getAnimationPreference = () => {
    const storeAnimation = getLocalStorageValue('animation');
    if (storeAnimation)
        return storeAnimation;
    else
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduced' : 'no-preference';
};
const setPreference = () => {
    setLocalStorageValue('animation', animation);
    reflectPreference();
};
const toggleAnimation = () => {
    animation = animation === 'reduced' ? 'no-preference' : 'reduced';
    setPreference();
};
const setAnimation = (state) => {
    animation = state;
    setPreference();
};
const listenAnimation = () => {
    animationReduceMedia.addEventListener('change', ({ matches: isReduced }) => {
        animation = isReduced ? 'reduced' : 'no-preference';
        setPreference();
    });
};
const initAnimation = (fixedAnimations) => {
    const storeAnimation = getLocalStorageValue('animation');
    if (fixedAnimations) {
        animation = fixedAnimations;
        setPreference();
        return;
    }
    if (storeAnimation === 'reduced' || (!storeAnimation && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
        animation = 'reduced';
    }
    else {
        animation = 'no-preference';
    }
    setPreference();
    listenAnimation();
};

export { getAnimationPreference, initAnimation, setAnimation, setPreference, toggleAnimation };
