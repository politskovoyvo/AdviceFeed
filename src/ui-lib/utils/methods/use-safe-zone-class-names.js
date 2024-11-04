import './animations.js';
import './theme.js';
import { useConfigContext } from '../../config/config-provider.js';

function useSafeZoneClassNames(safe = false) {
    const { safeZone } = useConfigContext();
    return safe ? Object.values(safeZone).join(' ') : 'left-0 top-0 bottom-0 right-0';
}

export { useSafeZoneClassNames };
