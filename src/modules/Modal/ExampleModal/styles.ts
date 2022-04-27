import styled from "styled-components";
import { colors } from "styles";

export const ExampleModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 500px;
  min-height: 300px;
  margin-right: -50%;
  padding: 10px;
  border-radius: 5px;
  background-color: ${colors.WHITE};
  transform: translate(-50%, -50%);
`;
