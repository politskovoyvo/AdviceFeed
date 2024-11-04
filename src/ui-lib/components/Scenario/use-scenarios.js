import { useState, useEffect, createElement, useRef } from 'react';
import { lazyDisclosure } from '../../utils/methods/lazy.js';
import { mergeRefs } from '../../utils/methods/merge-refs.js';
import { uniqueId } from '../../utils/methods/unique-id.js';
import { getValidChildren } from '../../utils/methods/valid-children.js';
import { createDescendantContext } from '../Descendants/use-descendant.js';
import { getStatus } from '../Stepper/step-utils.js';
import { transitionsPanel } from '../Tabs/tailwind-variations/transitions.js';
import { useScenarioContext, ScenarioPanelContext, useScenarioPanelContext } from './scenario-context.js';

const [ScenarioDescendantsProvider, useScenarioDescendantsContext, useScenarioDescendants, useScenarioDescendant] = createDescendantContext();
function getScenarioId(id, index) {
    return `${id}-scenario-${index}`;
}
function getScenarioPanelId(id, index) {
    return `${id}-scenario-panel-${index}`;
}
function useScenarios({ index = 0 }) {
    const [activeScenario, setActiveScenario] = useState(index);
    const [previousIndex, setPreviousIndex] = useState(activeScenario);
    const [isComplete, setIsComplete] = useState(false);
    return {
        binding: {
            activeScenario,
            setActiveScenario,
            setIsComplete,
            previousIndex
        },
        activeScenario,
        setActiveScenario,
        isComplete,
        isActiveStep(step) {
            return step === activeScenario;
        },
        isCompleteStep(step) {
            return step < activeScenario;
        },
        isIncompleteStep(step) {
            return step > activeScenario;
        },
        getStatus(step) {
            return getStatus(step, activeScenario);
        },
        next() {
            setPreviousIndex(activeScenario);
            setActiveScenario((step) => (isComplete ? step : step + 1));
        },
        previous() {
            setPreviousIndex(activeScenario);
            setActiveScenario((step) => Math.max(0, step - 1));
        }
    };
}
function useScenariosComponent({ isLazy, orientation = 'horizontal', lazyMode = 'unmount', binding, ...htmlProps }) {
    const descendants = useScenarioDescendants();
    const id = uniqueId('scenario');
    useEffect(() => {
        if (binding.activeScenario != null) {
            const max = descendants.count();
            if (max <= binding.activeScenario) {
                binding.setIsComplete(true);
            }
            else {
                binding.setIsComplete(false);
            }
        }
    }, [binding, binding.activeScenario]);
    return {
        htmlProps,
        id,
        selectedIndex: binding.activeScenario,
        setSelectedIndex: binding.setActiveScenario,
        setIsComplete: binding.setIsComplete,
        previousIndex: binding.previousIndex,
        isLazy,
        lazyMode,
        orientation,
        descendants
    };
}
function useScenariosStepper(props) {
    const { selectedIndex } = useScenarioContext();
    const descendants = useScenarioDescendantsContext();
    return { selectedIndex, descendants };
}
function useScenarioStep(props) {
    const { id, selectedIndex } = useScenarioContext();
    const { index, register } = useScenarioDescendant();
    const isSelected = index === selectedIndex;
    return {
        ref: mergeRefs(register, props.ref),
        id: getScenarioId(id, index),
        role: 'panel',
        panelIndex: isSelected ? 0 : -1
    };
}
function useScenarioPanels(props) {
    const { id, selectedIndex } = useScenarioContext();
    const validChildren = getValidChildren(props.children);
    const children = validChildren.map((child, index) => createElement(ScenarioPanelContext.Provider, {
        key: index,
        value: {
            id: getScenarioPanelId(id, index),
            stepId: getScenarioId(id, index),
            isSelected: selectedIndex === index,
            selectedIndex: selectedIndex,
            index
        }
    }, child));
    return { ...props, children };
}
function useScenarioPanel(props) {
    const { children, ...htmlProps } = props;
    const { isLazy, lazyMode, previousIndex, selectedIndex } = useScenarioContext();
    const { isSelected, id, stepId, index } = useScenarioPanelContext();
    const hasBeenSelected = useRef(false);
    if (isSelected) {
        hasBeenSelected.current = true;
    }
    const shouldRenderChildren = lazyDisclosure({
        wasSelected: hasBeenSelected.current,
        isSelected,
        enabled: isLazy,
        mode: lazyMode
    });
    let transitionDirection = 'left-inside';
    if (isSelected) {
        transitionDirection = index < previousIndex ? 'left-inside' : 'right-inside';
    }
    if (index === previousIndex) {
        transitionDirection = index < selectedIndex ? 'left-outside' : 'right-outside';
    }
    return {
        tabIndex: 0,
        children: shouldRenderChildren ? children : null,
        role: 'tabpanel',
        selected: isSelected,
        id,
        transitionDirection: transitionsPanel[transitionDirection],
        ...htmlProps
    };
}

export { ScenarioDescendantsProvider, useScenarioDescendant, useScenarioDescendants, useScenarioDescendantsContext, useScenarioPanel, useScenarioPanels, useScenarioStep, useScenarios, useScenariosComponent, useScenariosStepper };
