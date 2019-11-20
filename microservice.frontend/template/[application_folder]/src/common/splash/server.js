import fs from 'fs';
import path from 'path';
import process from 'process';
import makeCSS from '../style/css';
import theme from '../style/theme';

let cache = null;

export const get = () => {
    if (__DEV__ || !cache) {
        const templateFolder = path.join(
            process.cwd(),
            'common',
            'splash',
            'template',
        );

        const criticalCSS = makeCSS({ theme });
        const html = fs.readFileSync(path.join(templateFolder, 'index.html'));
        const js = fs.readFileSync(path.join(templateFolder, 'index.js'));
        const css = fs.readFileSync(path.join(templateFolder, 'index.css'));

        cache = {
            html,
            js,
            css: `
                ${criticalCSS}
                ${css}
            `,
        };
    }

    return cache;
};
