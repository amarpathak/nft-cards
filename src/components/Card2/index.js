import { Container, Card, Image, ReviseLogo } from "./styles";
import { useState, useEffect } from "react";
import TopMenu from "./TopMenu";
import Modal from "./Modal";
import Lists from "./Modal/Lists";
import Numbers from "./Modal/Numbers";
import One from "./Modal/One";

import axios from "axios";
const Card2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContainer, setModalContainer] = useState(null);

  const [nftData, setNftData] = useState(null);
  const [loadingNFT, setloadingNFT] = useState(true);
  const getModalContainer = () => {
    switch (modalContainer) {
      case "List":
        return <Lists nftData={nftData} />;
      case "Numbers":
        return <Numbers nftData={nftData} />;
      case "One":
        return <One nftData={nftData} />;
      default:
        return <></>;
    }
  };
  function getParam(param) {
    return new URLSearchParams(window.location.search).get(param);
  }
  useEffect(() => {
    const id = getParam("id");
    axios
      .get(
        `https://revise.link/${id || "5283c77f-6a37-41ac-b263-92375d8b6d8e"}`
      )
      .then((res) => {
        setNftData(res.data);
        setloadingNFT(false);
      });
  }, []);
  if (loadingNFT) {
    return <>Loading..</>;
  }
  return (
    <Container>
      <Card>
        <Image>
          <TopMenu
            setShowModal={setShowModal}
            setModalContainer={setModalContainer}
            nftData={nftData}
          />

          <img src={nftData?.image} />
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
