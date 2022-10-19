import { Container, Item } from "./styles";

const TopMenu = ({ setShowModal, setModalContainer }) => {
  const handleClick = (ContainerName) => {
    //Set Modal Open
    setShowModal(true);

    //Set Data
    setModalContainer(ContainerName);
  };
  return (
    <Container>
      <Item onClick={() => handleClick("One")}>Founder</Item>
      <Item onClick={() => handleClick("Numbers")}># 225</Item>
      <Item onClick={() => handleClick("List")}>4</Item>
    </Container>
  );
};

export default TopMenu;
