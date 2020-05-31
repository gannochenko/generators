import styled from 'styled-components';
import Color from 'color';

export const ButtonRoot = styled.button`
    padding: 0.5rem 1rem;
    color: white;
    border: 0 none;
    user-select: none;
    outline: none;
    cursor: pointer;
    vertical-align: middle;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.color.link.normal};
    &:hover {
        background-color: ${({ theme }) =>
            Color(theme.color.link.normal)
                .darken(0.1)
                .toString()};
    }
    transition: background-color 200ms ease;
`;
