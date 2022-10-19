import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 1rem;
  transform-origin: center top;
  z-index: 11;
  overflow: hidden;
  transform: scale(1);
  opacity: 1;
  transition: all 0.4s ease-in-out 0s;
  text-align: center;
  color: #fff;
`;

export const Cross = styled.div`
  font-size: 2em;
  text-align: right;
  margin-right: 1em;
  margin-top: 1em;
  font-weight: 900;
  color: #fff;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    font-size: 1em;
  }
`;
