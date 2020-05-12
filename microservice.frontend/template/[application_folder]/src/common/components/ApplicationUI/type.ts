import { History } from 'history';
import { NotificationContextPropsType } from '@gannochenko/ui';
import { ControllerProperties, PageState } from '../../store/type';
import { Nullable } from '../../../type';

export type ApplicationPropertiesAlt = {
    history: History<any>;
    serviceManager: any;
};

export type ApplicationProperties = ApplicationPropertiesAlt &
    NotificationContextPropsType &
    ControllerProperties;

export interface ApplicationState extends PageState {
    offline: Nullable<boolean>;
}
