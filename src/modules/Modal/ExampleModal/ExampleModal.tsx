import { Button } from "components";
import { BUTTON_SIZES } from "components/Button/types";
import { ExampleModalStyled } from "./styles";

interface IProps {
  onClose: () => void;
}

const ExampleModal = ({ onClose }: IProps) => {
  return (
    <ExampleModalStyled>
      <h1>Example modal</h1>
      <p>content</p>
      <Button onClick={onClose} size={BUTTON_SIZES.SMALL}>
        Close Modal
      </Button>
    </ExampleModalStyled>
  );
};

export default ExampleModal;
