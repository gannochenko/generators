import { ControllerProperties, PageState } from '../../store/type';
import { Nullable } from '../../../type';

export interface ApplicationProperties extends ControllerProperties {
    history: object;
    offline?: boolean;
}

export interface ApplicationState extends PageState {
    offline: Nullable<boolean>;
}
