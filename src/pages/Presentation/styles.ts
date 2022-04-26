import styled from "styled-components";
import { Text } from "components";
import { colors } from "styles";

export const PresentationStyled = styled.div`
  margin: 8px;
`;

export const Header = styled(Text)`
  text-align: center;
  color: ${colors.ACCENT_DARK};
`;

export const ButtonWrapper = styled.div`
  button {
    margin-top: 12px;
    margin-right: 8px;
  }
`;
