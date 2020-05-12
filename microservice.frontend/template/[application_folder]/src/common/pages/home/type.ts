import { NotificationContextPropsType } from '@gannochenko/ui';
import { ControllerProperties, PageState } from '../../store/type';

export type HomePagePropsAlt = {};

export type HomePagePropsType = HomePagePropsAlt &
    NotificationContextPropsType &
    ControllerProperties;

export type HomePageState = {} & PageState;
