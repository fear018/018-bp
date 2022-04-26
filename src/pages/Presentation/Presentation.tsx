import { Button, Text } from "components";
import { BUTTON_COLORS, BUTTON_SIZES } from "components/Button/types";
import { ButtonWrapper, Header, PresentationStyled } from "./styles";

const Presentation = () => {
  const onClickHandler = () => {};

  return (
    <PresentationStyled>
      <Header variant="h1">Presentation Page</Header>
      <Text variant="h1">variant h1</Text>
      <Text variant="h2">variant h2</Text>
      <Text variant="h3">variant h3</Text>
      <Text variant="h4">variant h4</Text>
      <Text variant="h5">variant h5</Text>
      <Text variant="h6">variant h6</Text>
      <Text variant="small">variant small</Text>
      <Text>variant p</Text>
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
    </PresentationStyled>
  );
};

export default Presentation;
