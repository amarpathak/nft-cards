import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Card = styled.div`
  width: 40%;
  height: 90%;
  background-color: aqua;
  border-radius: 1rem;

  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }

  @media only screen and (max-width: 920px) {
    width: 80%;
  }
  @media only screen and (max-width: 920px) {
    width: 80%;
  }
`;

export const Image = styled.div`
  /* position: absolute; */
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  img {
    max-width: 100%;
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
    object-position: center;
  }
`;

export const ReviseLogo = styled.div`
  position: absolute;
  bottom: 20px;
  img {
    height: 20px;
  }
`;
