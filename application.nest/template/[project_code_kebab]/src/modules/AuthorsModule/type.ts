export type CreateAuthorInputType = {
    firstName: string;
    lastName: string;
};

export type UpdateAuthorInputType = {
    firstName?: string;
    lastName?: string;
};

export type FindAuthorsInputType = {
    filter?: Record<string, unknown>;
    limit?: number;
};
