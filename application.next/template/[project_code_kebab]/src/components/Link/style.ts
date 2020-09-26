import { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';
import { LinkProps } from 'next/link';
import { LinkRootPropsType } from './type';
import { fgColors } from './util/fgColors';
import { ThemePropsType } from '../../styles/type';

const Wrapper: FunctionComponent<{
    className?: string;
    children: (className?: string) => ReactElement;
}> = ({ children, className }) => children(className);

const getLinkStyle = ({ theme }: ThemePropsType) => `
    ${fgColors({ theme })};
`;

export const LinkRoot = styled(Wrapper)<LinkRootPropsType>`
    ${getLinkStyle}
`;
