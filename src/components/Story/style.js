import styled from "@emotion/styled";

export const StyledStory = styled.div`
  /* padding: 100px 11vw 201px; */
  padding: 100px 2vw 201px;

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #242829;
    padding: 0 13vw;
  }
  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    color: #810102;
    margin-bottom: 36px;
    text-align: center;
  }
  h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    text-align: center;
  }
`;
export const StyledStoryContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: 77px;

  ::before {
    content: "";
    position: absolute;
    height: 100%;
    border: 1px solid #dfddd3;
    top: 0%;
    left: 50%;
  }
`;
export const StyledArticleConatiner = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding-left: ${({ toleft }) => (toleft ? "" : "calc(50% + 50px)")};
  padding-right: ${({ toleft }) => (toleft ? "calc(50% + 50px)" : "")};
`;

export const StyledArticleInfo = styled.div`
  padding: 70px 70px 0 70px;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 100px;
    top: 49%;
    left: ${({ toleft }) => (toleft ? "" : "-30px")};
    right: ${({ toleft }) => (toleft ? "-35px" : "")};
    border: 1px solid #dfddd3;
  }
  svg {
    text-align: center;
    line-height: 40px;
    position: absolute;
    top: 46%;
    left: ${({ toleft }) => (toleft ? "" : "-65px")};
    right: ${({ toleft }) => (toleft ? "-70px" : "")};
    z-index: 20;
  }

  span {
    padding: 15px 32px;
    background: #f3f1e7;
    border-radius: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #242829;
    width: max-content;
    position: absolute;
    top: 44.5%;
    left: ${({ toleft }) => (toleft ? "" : "-35%")};
    right: ${({ toleft }) => (toleft ? "-35%" : "")};
    z-index: 20;
  }
`;
export const StyledArticle = styled.div`
  padding-left: ${({ toleft }) => (toleft ? "" : "50px")};
  padding-right: ${({ toleft }) => (toleft ? "50px" : "")};
`;
