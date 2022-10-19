import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Image = styled.div`
  position: relative;
  height: 80%;
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  img {
    margin-top: auto;
    margin-bottom: auto;
    height: 100%;
    position: relative;
    border-radius: 1rem;
  }
`;
