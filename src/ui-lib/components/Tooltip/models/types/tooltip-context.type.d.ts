import { useTooltip } from '../../use-tooltip';
export type TTooltipContext = Omit<ReturnType<typeof useTooltip>, 'getTriggerProps'>;
