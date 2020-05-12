export interface Props {
    description?: string;
    lang?: string;
    meta?: Meta[];
    keywords?: string[] | string;
    title: string;
    image?: string;
}

export interface Meta {
    name: string;
    content: string;
}
