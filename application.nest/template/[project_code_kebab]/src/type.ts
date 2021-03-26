export interface ObjectLiteralType<P = any> {
    [k: string]: P;
}

export type ScalarType = string | number;

export type RESTResponse<D> = {
    data: D;
};

export type AsyncRESTResponse<E> = Promise<RESTResponse<E | null>>;
export type AsyncRESTResponseList<E> = Promise<RESTResponse<E[]>>;

export type IDType = string;
