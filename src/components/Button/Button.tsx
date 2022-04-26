import { ReactNode, MouseEvent } from "react";
import { ButtonStyled } from "./styles";
import { BUTTON_COLORS, BUTTON_SIZES } from "./types";

interface IProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  size?: BUTTON_SIZES;
  type?: "button" | "submit";
  variant?: BUTTON_COLORS;
}

const Button = ({
  children,
  className,
  disabled = false,
  onClick,
  size = BUTTON_SIZES.LARGE,
  type = "button",
  variant = BUTTON_COLORS.PRIMARY,
}: IProps) => {
  return (
    <ButtonStyled
      className={className}
      disabled={disabled}
      onClick={onClick}
      $size={size}
      type={type}
      variant={variant}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
