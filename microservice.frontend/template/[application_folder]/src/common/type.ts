export type Error = {
    message: string;
    code: string;
};

export type ErrorMessage = {
    text: string;
    type?: string;
    code?: string;
    icon?: string;
    closeable?: boolean;
    lifeTime?: number;
};

export type Notify = (message: ErrorMessage) => void;
