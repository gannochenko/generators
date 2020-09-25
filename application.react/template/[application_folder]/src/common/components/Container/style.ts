import styled from 'styled-components';
import { Props } from './type';

export const getContentAlignment = ({ contentAlign }: Props) => {
    if (contentAlign === 'center') {
        return `
            display: flex;
            align-items: center;
            flex-direction: column;
        `;
    }

    return '';
};

export const ContainerWide = styled.div<Props>`
    width: 100%;
    ${(props) => getContentAlignment(props)}
    position: relative;
`;

export const ContainerStandard = styled.div<Props>`
    margin: ${(props) => props.marginY || '0'} auto;
    width: 80%;
    max-width: 1200px;
    ${({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    })}
    padding: 0 1.5rem;
    ${(props) => getContentAlignment(props)};
    position: relative;
`;

export const ContainerNarrow = styled.div<Props>`
    margin: ${(props) => props.marginY || '0'} auto;
    width: auto;
    max-width: 40%;
    ${({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            maxWidth: '90%',
        },
    })}
    padding: 0 1rem;
    ${(props) => getContentAlignment(props)}
    position: relative;
`;
