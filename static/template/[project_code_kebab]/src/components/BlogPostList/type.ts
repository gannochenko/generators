import { ContentRecordType } from '../../type';

type NodeType = {
    node: ContentRecordType;
};

export type Props = {
    data: NodeType[];
    showLink?: boolean;
    drafts?: boolean;
};
