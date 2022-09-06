import styled from "@emotion/styled";

export const StyledAboutInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  justify-content: center;
  grid-column-gap: 7vw;
  padding: 11vw 11vw 0;
`;
export const StyledAboutInfoImage = styled.div`
  margin-top: 20px;
`;
export const StyledAboutInfoImageConatiner1 = styled.div`
  width: 500px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 98%;
    background-color: #f3f1e7;
    top: -4%;
    left: -2%;
    z-index: -1;
  }
`;
export const StyledAboutInfoImageConatiner2 = styled.div`
  width: 440px;
  position: relative;
  top: -150px;
  left: 140px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 98%;
    background-color: #f3f1e7;
    top: 4%;
    left: 2%;
    z-index: -1;
  }
`;
export const StyledAboutInfoInfo = styled.div`
  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    color: #810102;
    margin-bottom: 24px;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #242829;
    margin-bottom: 24px;
  }
`;
