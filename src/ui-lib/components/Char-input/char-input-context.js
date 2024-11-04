import { createContext } from '../../utils/hooks/context.js';
import { createDescendantContext } from '../Descendants/use-descendant.js';

const [CharInputProvider, useCharInputContext] = createContext({
    providerName: 'CharInputProvider',
    hookName: 'useCharInputContext'
});
const [CharInputDescendantsProvider, useCharInputDescendantsContext, useCharInputDescendants, useCharInputDescendant] = createDescendantContext();

export { CharInputDescendantsProvider, CharInputProvider, useCharInputContext, useCharInputDescendant, useCharInputDescendants, useCharInputDescendantsContext };
