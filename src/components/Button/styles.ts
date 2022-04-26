import styled from "styled-components";
import { colors } from "styles";
import { BUTTON_COLORS, BUTTON_SIZES } from "./types";

interface IProps {
  disabled: boolean;
  variant: BUTTON_COLORS;
  $size: BUTTON_SIZES;
}

export const ButtonStyled = styled.button<IProps>`
  width: ${({ $size }: IProps) =>
    $size === BUTTON_SIZES.SMALL ? "96px" : "122px"};
  height: ${({ $size }: IProps) =>
    $size === BUTTON_SIZES.SMALL ? "32px" : "40px"};
  border: 1px solid;
  border-radius: 5px;
  border-color: ${({ variant }: IProps) => colors[variant]};
  background-color: ${colors.WHITE};
  font-size: 16px;
  color: ${({ variant }: IProps) => colors[variant]};
  cursor: ${({ disabled }: IProps) => (disabled ? "default" : "pointer")};

  &:hover {
    background-color: ${({ variant }: IProps) => colors[`${variant}_LIGHT`]};
  }
`;
