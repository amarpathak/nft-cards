import { Container, Item } from "./styles";

const TopMenu = ({ setShowModal, setModalContainer, nftData }) => {
  const handleClick = (ContainerName) => {
    //Set Modal Open
    setShowModal(true);

    //Set Data
    setModalContainer(ContainerName);
  };
  return (
    <Container>
      <Item onClick={() => handleClick("One")}>{nftData?.name}</Item>
      <Item onClick={() => handleClick("Numbers")}>#001</Item>
      <Item onClick={() => handleClick("List")}>
        {nftData?.attributes?.length}
      </Item>
    </Container>
  );
};

export default TopMenu;
