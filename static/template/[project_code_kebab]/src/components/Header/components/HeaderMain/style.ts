import styled, { css, keyframes } from 'styled-components';
import Img from 'gatsby-image';
import {
    absoluteCover,
    central,
    align,
    rectangle,
    backgroundCover,
    gap,
} from '@gannochenko/etc';
import { withEffects } from '@gannochenko/ui';
const arrow = require('./assets/arrow.svg') as string;
import { theme } from '../../../../style';

const bouncedAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
`;

export const HeaderMainContainer = styled.header`
    position: relative;
    min-width: 320px;
    flex-shrink: 0;
`;

export const BackgroundImage = styled(Img)`
    ${absoluteCover()};
    user-select: none;
    position: absolute !important;
`;

export const ImageOverlay = styled.div`
    ${absoluteCover()};
    background-color: black;
    opacity: 0.6;
`;

const expandVertically = css`
    height: 100vh;
    overflow-y: hidden;
`;
export const Data = styled.div`
    font-family: ${({ theme }) => theme.typography.fontFamilyHeader};
    ${central()}
    ${align('center', 'center', 'column')}
    ${({ theme }) =>
        theme.util.media({
            '>md': expandVertically,
        })};
    padding: 2rem 1rem;
    ${({ theme }) =>
        theme.util.media({
            '<sm': css`
                padding-top: 4rem;
            `,
        })};
    position: relative;
`;

export const Arrow = withEffects(styled.div<{
    theme: typeof theme;
    onClick: () => void;
}>`
    ${backgroundCover(arrow)};
    ${rectangle('72px', '53px', 0.7)};
    position: absolute;
    left: calc(50% - 1rem);

    cursor: pointer;
    bottom: 2.5rem;
    color: white;

    animation-name: ${bouncedAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in;

    display: none;
    ${({ theme }) =>
        theme.util.media({
            '>md': 'display: block;',
        })}

    // @ts-ignore
    ${props => props.runStandardEffect()}
`);

export const DataColumn = styled.div`
    ${align('center', 'left', 'column')};
    width: 100%;
    height: 100%;
    position: relative;
`;

export const MenuOffset = styled.div`
    height: 40px;
`;

<% if (use_blog) { %>
export const HelloBlock = styled.div`
    color: #fff;
    ${({ theme }) =>
        theme.util.grid({
            guttersW: { xs: '0', all: '1rem' },
            guttersH: { xs: '1.5rem' },
        })}
    ${align('center', 'left')}
    width: 100%;
`;

export const HelloLeft = withEffects(styled.div`
    ${({ theme }) => theme.util.cell({ xs: 12, all: 4 })}
    ${align('top', 'center')}
    // @ts-ignore
    ${props => props.runStandardEffect()}
`);

export const HelloRight = styled.div`
    ${({ theme }) => theme.util.cell({ xs: 12, all: 8 })}
    ${({ theme }) => theme.util.media({ xs: align('top', 'center', 'column') })}
`;

export const NameBlock = withEffects(styled.h1`
    font-family: ${({ theme }) => theme.typography.fontFamilyHeader};
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    font-size: ${props => props.theme.fontSize.large};
    letter-spacing: 0.05rem;
    ${({ theme }) => theme.util.media({ xs: 'text-align: center;' })}
    // @ts-ignore
    ${props => props.runStandardEffect()}
`);

export const GreetingBlock = withEffects(styled.div`
    letter-spacing: 0.05rem;
    line-height: 1.2;
    ${({ theme }) => theme.util.media({ xs: 'text-align: center;' })}
    // @ts-ignore
    ${props => props.runStandardEffect()}
`);

export const SocialBar = withEffects(styled.div`
    ${gap(null, '1.5rem')};
    padding-top: 1.5rem;
    // @ts-ignore
    ${props => props.runStandardEffect()}
`);
<% } %>

