import { MoodIcon } from "assets";
import Buttons from "./Buttons";
import Headers from "./Headers";
import Modals from "./Modals";
import { Header, MoodIconStyled, PresentationStyled } from "./styles";

const Presentation = () => {
  return (
    <PresentationStyled>
      <Header variant="h1">Presentation Page</Header>
      <MoodIcon />
      <MoodIconStyled />
      <Headers />
      <Buttons />
      <br />
      <Modals />
    </PresentationStyled>
  );
};

export default Presentation;
