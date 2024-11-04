import { InputHTMLAttributes, PropsWithChildren } from 'react';
import { TUseScenariosComponent } from '../../use-scenarios';
import { IScenariosSteps } from '../interfaces';
export type TScenarioProps = PropsWithChildren & TUseScenariosComponent & Omit<InputHTMLAttributes<HTMLDivElement>, 'onChange'> & IScenariosSteps;
