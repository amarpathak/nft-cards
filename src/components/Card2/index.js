import { Container, Card, Image, ReviseLogo } from "./styles";
import { useState } from "react";
import TopMenu from "./TopMenu";
import Modal from "./Modal";
import Lists from "./Modal/Lists";
import Numbers from "./Modal/Numbers";
import One from "./Modal/One";
const Card2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContainer, setModalContainer] = useState(null);
  const getModalContainer = () => {
    switch (modalContainer) {
      case "List":
        return <Lists />;
      case "Numbers":
        return <Numbers />;
      case "One":
        return <One />;
      default:
        return <></>;
    }
  };
  return (
    <Container>
      <Card>
        <Image>
          <TopMenu
            setShowModal={setShowModal}
            setModalContainer={setModalContainer}
          />

          <img
            src={
              "https://ether-cards.mypinata.cloud/ipfs/QmbkGSyXgthdE7bXA8RUzFxXnR13qQCsk4sBJm4KAFDhwC/31/03/310363e425.jpg"
            }
          />
          <ReviseLogo>
            <img
              src={
                "https://revise.network/static/media/Revisemainlogo.0af4af450a2892a8a678e29fbd4822e4.svg"
              }
            />
          </ReviseLogo>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            setModalContainer={setModalContainer}
          >
            {getModalContainer()}
          </Modal>
        </Image>
      </Card>
    </Container>
  );
};

export default Card2;
