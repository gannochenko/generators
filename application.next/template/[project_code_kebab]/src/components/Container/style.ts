import styled from 'styled-components';
import { ContainerPropsType, ContainerRootPropsType } from './type';

export const getContentAlignment = ({
    contentAlign,
}: ContainerPropsType): string => {
    if (contentAlign === 'center') {
        return `
            display: flex;
            align-items: center;
            flex-direction: column;
        `;
    }

    return '';
};

export const ContainerRootWide = styled.div<ContainerRootPropsType>`
    width: 100%;
    ${(props) => getContentAlignment(props)};
    position: relative;
`;

export const ContainerRootStandard = styled.div<ContainerRootPropsType>`
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

export const ContainerRootNarrow = styled.div<ContainerRootPropsType>`
    margin: ${(props) => props.marginY || '0'} auto;
    width: auto;
    max-width: 40%;
    ${({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
            maxWidth: '90%',
        },
    })}
    padding: 0 1rem;
    ${(props) => getContentAlignment(props)};
    position: relative;
`;
