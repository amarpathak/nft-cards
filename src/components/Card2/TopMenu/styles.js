import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;

  z-index: 5;
  position: absolute;
  width: 90%;
  top: 10px;
`;

export const Item = styled.span`
  border-radius: 0.6em;
  padding: 0.4em 0.3em;
  font-size: 1.2em;
  transition: opacity 0.4s ease-in-out, background-color 0.4s ease-in-out;
  cursor: pointer;
  background-color: #000;
  min-width: 2.4em;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 2.2em;
  font-family: Poppins;
  font-weight: 600;
  font-size: 1em;

  @media only screen and (max-width: 480px) {
    font-size: 0.8em;
    min-width: 2em;
    min-height: 1.8em;
  }
`;
