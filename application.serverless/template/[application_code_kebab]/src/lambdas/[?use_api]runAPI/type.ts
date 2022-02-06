type ServiceResponseErrorType = {
    code: string;
    message?: string;
};

export type ServiceResponseType<D> = {
    data: D;
    errors?: ServiceResponseErrorType[];
};
