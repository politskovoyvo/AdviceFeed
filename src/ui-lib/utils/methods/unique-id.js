import { useId } from 'react';

const uniqueId = (componentName) => `ui-${componentName ?? 'control'}${useId()}`;

export { uniqueId };
