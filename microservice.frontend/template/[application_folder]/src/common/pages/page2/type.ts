import { NotificationContextPropsType } from '@gannochenko/ui';
import { ControllerProperties, PageState } from '../../store/type';

export type Page2PropsAlt = {};

export type Page2PropsType = Page2PropsAlt &
    NotificationContextPropsType &
    ControllerProperties;

export type Page2State = {} & PageState;
