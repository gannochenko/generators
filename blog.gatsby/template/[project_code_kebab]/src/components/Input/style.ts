import styled from 'styled-components';

export const InputRoot = styled.input<{ width: string }>`
    padding: 0.6rem 0.8rem;
    border-radius: 2px;
    border: 1px solid lightgray;
    font-size: 14px;
    width: ${props => (props.width ? props.width : 'auto')};
`;
