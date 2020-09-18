import styled from 'styled-components';
import { backgroundCover } from '@gannochenko/etc';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image01 = require('../../../static/assets/404/01.jpg') as string;

export const NotFoundFrameRoot = styled.div`
    display: flex;
    margin-top: 4rem;
`;

export const Image = styled.div`
    ${backgroundCover(image01)}
    width: 30rem;
    height: 30rem;
`;

export const Message = styled.div`
    padding-left: 2rem;
    color: ${({ theme }) => theme.color.secondary};
`;

export const Code = styled.div`
    font-size: 10rem;
    line-height: 0.8;
`;

export const Explanation = styled.div`
    font-size: ${({ theme }) => theme.fontSize.bigger};
    line-height: 1.8;
    margin-top: 1rem;
`;

export const Left = styled.div`
    position: relative;
    ${({ theme }) =>
        theme.util.media({
            '<sm': 'display: none;',
        })}
`;
