import styled from 'styled-components';
import { Button, withStyles } from '@material-ui/core';
import { absoluteCover, align, backgroundCover } from '@gannochenko/etc';

// eslint-disable-next-line global-require
const cookies = require('./assets/cookies.jpg').default as string;

export const CookiePopupContainer = styled.div<{ fadingAway: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: fixed;
    bottom: 1rem;
    background-color: white;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.1);
    right: ${({ fadingAway }) => (!fadingAway ? 0 : '-1rem')};
    opacity: ${({ fadingAway }) => (!fadingAway ? 1 : 0)};
    transition: right 500ms ease, opacity 500ms ease;
`;

export const Picture = styled.div`
    ${backgroundCover(cookies)};
    width: 7rem;
    ${({ theme }) => ({
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    })}
    position: relative;
    &:hover > * {
        opacity: 1;
    }
`;

export const Text = styled.div`
    padding: 0.5rem 1rem;
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    line-height: 1.5;
    position: relative;
`;

export const AgreeButton = withStyles({
    root: {
        marginTop: '1rem',
        textTransform: 'none',
        cursor: 'pointer',
        display: 'block',
    },
})(Button);

export const Copyright = styled.div`
    opacity: 0;
    ${absoluteCover()}
    background-color: white;
    color: gray;
    font-size: ${({ theme }) => theme.typography.fontSize.micro};
    ${align('center', 'center', 'column')}
    transition: opacity 200ms ease;
`;
