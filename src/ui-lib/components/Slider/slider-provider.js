import { createContext } from '../../utils/hooks/context.js';

const [SliderProvider, useSliderContext] = createContext({
    providerName: 'SliderProvider',
    hookName: 'useSliderContext'
});

export { SliderProvider, useSliderContext };
