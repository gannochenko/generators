import { applicationReducer } from '../components';
import {
    homePageReducer,
    page2Reducer,
    cookiePolicyPageReducer,
} from '../pages';

export default {
    application: applicationReducer,
    home: homePageReducer,
    page2: page2Reducer,
    cookiePolicy: cookiePolicyPageReducer,
};
