import { NotificationContextPropsType } from '@gannochenko/ui';
import { ControllerProperties, PageState } from '../../store/type';

export type <%- page_name_pascal %>PageOwnPropsType = {};

export type <%- page_name_pascal %>PagePropsType = <%- page_name_pascal %>PageOwnPropsType &
    NotificationContextPropsType &
    ControllerProperties;

export type <%- page_name_pascal %>PageState = {} & PageState;
