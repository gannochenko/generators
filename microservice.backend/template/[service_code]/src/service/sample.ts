import _ from '@bucket-of-bolts/microdash';
import { logError } from '@bucket-of-bolts/util';
import SampleEntity from '../model/sample';
import {ObjectLiteral} from '../type';

export class SampleService {
    public static async getById(id: string) {
        return {
            id,
            title: 'bar',
        };
    }

    public static async create(data: ObjectLiteral) {
        return {
            id: 'random',
            ...data,
        };
    }
}
