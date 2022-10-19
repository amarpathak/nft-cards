import { Container, Item } from "./styles";

const TopMenu = ({ setShowModal }) => {
  const handleClick = (data) => {
    //Set Modal Open
    setShowModal(true);

    //Set Data
  };
  return (
    <Container>
      <Item onClick={() => handleClick()}>Founder</Item>
      <Item onClick={() => handleClick()}>$ 225</Item>
      <Item onClick={() => handleClick()}>4</Item>
    </Container>
  );
};

export default TopMenu;
