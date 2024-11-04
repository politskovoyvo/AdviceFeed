import { useCallback } from 'react';
import 'react/jsx-runtime';
import '../../icons/application/loading.icon.js';
import '../../icons/suggested/check-fill.icon.js';
import '../../icons/suggested/cross.icon.js';
import '../../icons/suggested/exclamation-circle-fill.icon.js';
import '../../components/Button/Button.js';
import '../../components/Toast/toaster-provider.js';
import { useToast } from '../../components/Toast/use-toast.js';
import { callAllHandlers } from '../../utils/methods/call-all-handlers.js';

function useTooltip(props) {
    const { label, isDisabled, ...rest } = props;
    const toast = useToast();
    const onPointerDown = useCallback((e) => {
        if (e.pointerType !== 'touch' || isDisabled)
            return;
        toast({ description: label });
    }, [label, toast]);
    const getChildrenProps = useCallback((_props = {}) => {
        return {
            ..._props,
            onPointerDown: callAllHandlers(_props.onPointerDown, onPointerDown)
        };
    }, [onPointerDown]);
    return {
        ...rest,
        label,
        isDisabled,
        getChildrenProps
    };
}

export { useTooltip };
