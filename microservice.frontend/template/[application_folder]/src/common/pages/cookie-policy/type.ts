import { NotificationContextPropsType } from '@gannochenko/ui';
import { ControllerProperties, PageState } from '../../store/type';

export type CookiePolicyPagePropsAlt = {};

export type CookiePolicyPagePropsType = CookiePolicyPagePropsAlt &
    NotificationContextPropsType &
    ControllerProperties;

export type CookiePolicyPageState = {} & PageState;
