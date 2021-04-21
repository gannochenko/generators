import { DTO, Attribute } from '@gannochenko/express.mvc';

@DTO()
export class SamplePutDTO {
    @Attribute({ type: 'string', required: true })
    public title: string | undefined;
}
