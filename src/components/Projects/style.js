import styled from "@emotion/styled";

export const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3vw;
  padding: 0 10vw 102px;
`;
export const StyledProject = styled.div`
  height: 95vh;
  padding: 10px;
  position: relative;
  background-color: #f3f1e7;
  margin-top: -155px;
`;
export const StyledProjectConatiner = styled.div`
  height: 100%;

  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.45) 58.18%,
      rgba(0, 0, 0, 0.45) 100%
    ),
    url(${({ src }) => src});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  h2 {
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
    color: #ffffff;
    margin-bottom: 10px;
  }
  p {
    padding: 0 2vw;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    margin-bottom: 17px;
  }
  button {
    border: 1px solid #f3f1e7;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    width: max-content;
    padding: 4px 18px;
    margin-bottom: 37px;
    background-color: transparent;
    color: #ffffff;
  }
`;
