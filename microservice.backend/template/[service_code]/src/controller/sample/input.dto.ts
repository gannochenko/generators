import { DTO, Attribute } from '@bucket-of-bolts/express-mvc';

@DTO()
class TSDTO {}

@DTO()
class SchemaDTO {
    @Attribute({ type: TSDTO, required: true })
    public ts: object | undefined;
}

@DTO()
export class SamplePutDTO {
    @Attribute({ type: SchemaDTO, required: true })
    public schema: object | undefined;
}
