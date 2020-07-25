import { SampleGQLService } from './sample-gql';
import {ObjectLiteral} from '../../type';
import {Service} from '../lib/service';

export const services: ObjectLiteral<Service> = {
    sampleGQL: SampleGQLService,
};
