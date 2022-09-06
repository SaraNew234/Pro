import styled from "@emotion/styled";

export const StyledFooter = styled.div`
  width: 100vw;
  background-color: #590000;
  overflow-x: hidden;
`;

export const StyledFooterLinks = styled.div`
  padding: 70px 6vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 6vw;
`;
export const StyledFooterCopyRight = styled.div`
  padding: 28px 6vw;
  display: flex;
  justify-content: space-between;
  background-color: #450000;

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #d7d7d7;
    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
export const StyledLinks = styled.div`
  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: #ffffff;
    margin-bottom: 24px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #d7d7d7;
    margin-bottom: 12px;
  }
`;
