import { useCheckbox } from '../Checkbox/use-checkbox.js';

function useSwitch(props, ref) {
    const { id, ...rest } = props;
    const { getInputProps } = useCheckbox({ id, ...rest });
    const inputProps = getInputProps(ref);
    return {
        id,
        inputProps,
        ...rest
    };
}

export { useSwitch };
