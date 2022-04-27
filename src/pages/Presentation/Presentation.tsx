import Buttons from "./Buttons";
import Headers from "./Headers";
import Modals from "./Modals";
import { Header, PresentationStyled } from "./styles";

const Presentation = () => {
  return (
    <PresentationStyled>
      <Header variant="h1">Presentation Page</Header>
      <Headers />
      <Buttons />
      <br />
      <Modals />
    </PresentationStyled>
  );
};

export default Presentation;
