import styled from "@emotion/styled";

export const StyledBlog = styled.div`
  padding: 124px 5vw 0;
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    text-align: center;
  }
  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    color: #810102;
    text-align: center;
    margin-bottom: 92px;
  }
`;
export const StyledBlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3vw;
`;
