import styled from "@emotion/styled";

export const StyledPublications = styled.div`
  padding: 0 5vw;
  margin-top: 45vh;

  h2 {
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    color: #810102;
    margin-bottom: 50px;
    text-align: center;
  }
`;

export const StyledPublicationsConatiner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3vw;
  grid-row-gap: 34px;
  margin-bottom: 153px;
`;
export const StyledPublication = styled.div`
  height: fit-content;
  grid-row: ${({ grid }) => grid};
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  text-align: center;
  padding: ${({ paddingTop }) => (paddingTop ? paddingTop : "30px")} 1vw 0 24vw;

  h2 {
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
    margin-bottom: 34px;
    margin-bottom: ${({ titleMargin }) => (titleMargin ? titleMargin : "34px")};
    text-align: left;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    margin-bottom: 88px;
    margin-bottom: ${({ descMargin }) => (descMargin ? descMargin : "88px")};
    text-align: left;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #ffffff;
    margin-bottom: 14px;
  }
  button {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    color: #ffffff;
    border: 1px solid #ffffff;
    padding: 4px 18px;
    background-color: transparent;
    margin-bottom: 42px;
    width: max-content;
  }
`;
