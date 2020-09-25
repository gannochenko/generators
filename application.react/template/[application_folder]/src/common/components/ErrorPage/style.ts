import styled from 'styled-components';
import { backgroundCover } from '@gannochenko/etc';

export const NotFoundFrameRoot = styled.div`
    display: flex;
`;

export const Image = styled.div<{ image: string }>`
    ${({ image }) => backgroundCover(image)}
    width: 30rem;
    height: 30rem;
`;

export const Message = styled.div`
    padding-left: 2rem;
    color: gray;
`;

export const Code = styled.div`
    font-size: 10rem;
    line-height: 0.8;
`;

export const Explanation = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.bigger};
    line-height: 1.8;
    margin-top: 1rem;
`;

export const Left = styled.div`
    position: relative;
    ${({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    })}
`;
