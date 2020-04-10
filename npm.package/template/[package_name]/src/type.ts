export type Nullable<X = any> = X | null;

export interface ObjectLiteral<P = any> {
    [k: string]: P;
}

export type Indexed<O, P = any> = O & ObjectLiteral<P>;
