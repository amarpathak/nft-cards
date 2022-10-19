import { Container, ImageContainer, Image, OverLayContainer } from "./styles";
import TopMenu from "./TopMenu";
import { useState } from "react";
const Card = () => {
  const [showModal, setShowModal] = useState(false);

  console.log({ showModal });
  return (
    <Container>
      <ImageContainer>
        <Image>
          <TopMenu setShowModal={setShowModal} />
          <img
            src={
              "https://ether-cards.mypinata.cloud/ipfs/QmbkGSyXgthdE7bXA8RUzFxXnR13qQCsk4sBJm4KAFDhwC/31/03/310363e425.jpg"
            }
          />
          {/* {showModal && (
            <Modal>
              <div onClick={() => setShowModal(false)}>X</div>
              <div>
                <h1>Heading</h1>
                <p>Some data</p>
              </div>
            </Modal>
          )} */}
        </Image>
      </ImageContainer>
    </Container>
  );
};

export default Card;
