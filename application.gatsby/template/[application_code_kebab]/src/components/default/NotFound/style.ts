import styled from '@emotion/styled';
import {
    muiTypography,
    muiColor,
    muiSpacing,
} from '@gannochenko/ui.emotion';

export const NotFoundRoot = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${muiSpacing(16)};
`;

export const Message = styled.div`
  padding-left: ${muiSpacing(8)};
  color: ${muiColor('text.primary')};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Code = styled.div`
  font-size: ${muiSpacing(40)};
  line-height: 0.8;
`;

export const Explanation = styled.div`
  ${muiTypography('h6')};
  margin-top: ${muiSpacing(4)};
`;
