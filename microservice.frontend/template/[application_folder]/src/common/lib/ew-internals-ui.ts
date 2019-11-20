// todo: take from ew-internals-ui
export interface ErrorMessage {
    text: string;
    type?: string;
    code?: string;
    icon?: string;
    closeable?: boolean;
    lifeTime?: number;
}

export type Notify = (message: ErrorMessage) => void;
