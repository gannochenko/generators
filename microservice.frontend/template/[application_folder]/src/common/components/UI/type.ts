import { ControllerProperties, PageState } from '../../store/type';

export interface ApplicationProperties extends ControllerProperties {
    history: object;
    offline?: boolean;
}

export interface ApplicationState extends PageState {
    offline: Nullable<boolean>;
}
