import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  padding: 1em;
  font-size: 2em;
  text-align: left;
`;

const Lists = () => {
  const listItems = [
    {
      title: "Forge Protector",
    },
    {
      title: "Limited Trait Slot",
    },
    {
      title: "Battle Ticket",
    },
  ];

  return (
    <Container>
      {listItems.map((i) => (
        <Item>{i.title}</Item>
      ))}
    </Container>
  );
};

export default Lists;
