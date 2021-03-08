import styled from 'styled-components';
import { Link } from '../Link';
import { Container } from '../Container';
import { muiColor } from '@gannochenko/ui.styled-components';

export const BuildingDetailNavigateBack = styled(Link)`
    font-size: 0.8rem;
    color: ${muiColor('secondaryLink.main')};
    &:hover {
        color: ${muiColor('secondaryLink.dark')};
    }
`;

export const BuildingDetailNavigateBackContainer = styled(Container)`
    margin-top: 2rem;
    margin-bottom: -3rem;
`;
