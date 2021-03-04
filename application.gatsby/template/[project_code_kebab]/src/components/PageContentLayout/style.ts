import styled from 'styled-components';
import { Link } from 'gatsby';
import { muiTypography } from '@gannochenko/ui.styled-components';

export const BodyLayoutContent = styled.div`
    flex-grow: 1;
`;

export const BodyLayoutBackLink = styled(Link)`
    text-decoration: none;
    ${muiTypography('caption')};
`;
