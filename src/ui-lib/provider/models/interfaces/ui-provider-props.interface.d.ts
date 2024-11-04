import { INavigationOptions } from '../../../components/Navigation/models';
import { IToast } from '../../../components/Toast/models';
import { TConfig } from '../../../config/models';
export interface IUIProviderProps {
    toastOptions?: IToast;
    navigationOptions?: INavigationOptions;
    config: TConfig;
}
