<% if (use_postgres) { %>
import { Connection } from 'typeorm';
import { SampleEntity } from '../model';
<% } %>
import { ObjectLiteral } from '../type';

export class SampleService {
<% if (use_postgres) { %>
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }
<% } %>

    public async getById(id: string) {
<% if (use_postgres) { %>
        const repository = this.connection.getRepository(SampleEntity);
        return repository.findOne(id);
<% } else { %>
        return {
            id,
            title: 'Some demo data'
        };
<% } %>
    }

    public async create(data: ObjectLiteral) {
<% if (use_postgres) { %>
        const repository = this.connection.getRepository(SampleEntity);
        const item = repository.create(data);

        await repository.save(item);

        return item;
<% } else { %>
        return {
            ...data,
            id: '6e086b10-b0ee-4d21-a1ed-66704219d54f'
        };
<% } %>
    }
}
