import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import { theme as siteTheme } from '../../style/theme';

export const listingDefaultTheme = duotoneDark;
listingDefaultTheme.plain.color = siteTheme.color.link.normal;
listingDefaultTheme.styles[3].style.color = siteTheme.color.link.normal;

export const listingBashTheme = duotoneLight;
