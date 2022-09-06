import styled from "@emotion/styled";

export const StyledArticle = styled.div`
  
  img {
    width: 100%;
    height: 384px;
    object-fit: cover;
  }
  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin: 20px 0;
    color: ${({ color }) => (color ? color : "black")} !important;
    text-align: left !important;
    padding: 0 !important;
  }
`;
