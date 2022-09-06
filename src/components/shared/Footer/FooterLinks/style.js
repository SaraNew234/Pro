import styled from "@emotion/styled";

export const StyledFooterLink = styled.div`
  p {
    margin: 24px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #d7d7d7;
  }
`;
export const StyledFooterSocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, 1fr);
  grid-column-gap: 1vw;
`;
export const StyledFooterSocialLink = styled.div`
  cursor: pointer;
  span {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #770a0a;
  }
`;
