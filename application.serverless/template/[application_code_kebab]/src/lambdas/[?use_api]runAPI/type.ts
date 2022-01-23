export type ServiceResponseType<D, A = Record<string, unknown>> = {
    data: D;
    aux: A;
};
