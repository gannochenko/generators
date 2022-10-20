import { ABOUT, CONTACTS } from './pathTemplates';

type MenuItemsType = {
    text: string;
    link: string;
}[];

export const menu: MenuItemsType = [
    { text: 'О проекте', link: ABOUT },
    { text: 'Контакты', link: CONTACTS },
];
