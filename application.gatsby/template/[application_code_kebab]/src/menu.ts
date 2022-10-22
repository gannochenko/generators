import { ABOUT, CONTACTS } from './pathTemplates';

type MenuItemsType = {
    text: string;
    link: string;
}[];

export const menu: MenuItemsType = [
    { text: 'About', link: ABOUT },
    { text: 'Contacts', link: CONTACTS },
];
