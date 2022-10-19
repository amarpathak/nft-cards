import { Container, Cross } from "./styles";

const Modal = ({ showModal, setShowModal, children }) => {
  if (!showModal) {
    return <></>;
  }

  return (
    <Container>
      <Cross onClick={() => setShowModal(false)}>X</Cross>
      {children}
    </Container>
  );
};

export default Modal;
