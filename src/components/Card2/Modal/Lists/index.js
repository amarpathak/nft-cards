import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  padding: 1em;
  font-size: 2em;
  cursor: pointer;
  :hover {
    color: pink;
  }

  #trait {
    text-transform: capitalize;
  }
`;

const Lists = ({ nftData }) => {
  return (
    <Container>
      {nftData.attributes.map((i) => (
        <Item>
          <span id="trait">{i.trait_type}</span> : {i.value}
        </Item>
      ))}
      <div>
        <h3>You can do more with NFTs</h3>
        <h4>Powered by Revise</h4>
      </div>
    </Container>
  );
};

export default Lists;

// Founder : Name

// Length : attributes()

// Value ()
