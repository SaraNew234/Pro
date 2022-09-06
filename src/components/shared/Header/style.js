import styled from "@emotion/styled";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledHeaderLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(6, max-content);
  grid-column-gap: 2vw;
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;
  }
`;
