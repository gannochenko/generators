<% if (use_graphql) { %>import { SampleGQLService } from './[?use_graphql]sample-gql';<% } %>
import {ObjectLiteral} from '../../type';
import {Service} from '../lib/service';

export const services: ObjectLiteral<Service> = {
    <% if (use_graphql) { %>sampleGQL: SampleService,<% } %>
};
