import { Button } from "components";
import { BUTTON_COLORS, BUTTON_SIZES } from "components/Button/types";
import { ButtonWrapper } from "./styles";

const Buttons = () => {
  const onClickHandler = () => {};

  return (
    <ButtonWrapper>
      <Button onClick={onClickHandler}>Primary</Button>
      <Button onClick={onClickHandler} variant={BUTTON_COLORS.SECONDARY}>
        Secondary
      </Button>
      <Button onClick={onClickHandler} variant={BUTTON_COLORS.SUCCESS}>
        Success
      </Button>
      <Button onClick={onClickHandler} variant={BUTTON_COLORS.ERROR}>
        Error
      </Button>
      <br />
      <Button onClick={onClickHandler} size={BUTTON_SIZES.SMALL}>
        Primary
      </Button>
      <Button
        onClick={onClickHandler}
        size={BUTTON_SIZES.SMALL}
        variant={BUTTON_COLORS.SECONDARY}
      >
        Secondary
      </Button>
      <Button
        onClick={onClickHandler}
        size={BUTTON_SIZES.SMALL}
        variant={BUTTON_COLORS.SUCCESS}
      >
        Success
      </Button>
      <Button
        onClick={onClickHandler}
        size={BUTTON_SIZES.SMALL}
        variant={BUTTON_COLORS.ERROR}
      >
        Error
      </Button>
    </ButtonWrapper>
  );
};

export default Buttons;
