import styled from "@emotion/styled";

export const StyledAboutUs = styled.div`
  padding: 0 5vw;
  height: 746px;
  background-color: #f3f1e7;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 4vw;
  position: relative;
`;
export const StyledAboutUsImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 745px;
    object-fit: cover;
    position: relative;
    top: 137px;
    z-index: 30;
  }
  z-index: 20;
  ::after {
    content: "";
    position: absolute;
    width: 43%;
    height: 98%;
    background-color: #810102;
    top: 21%;
    left: 6%;
    box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.25);
    z-index: 0;
  }
`;
export const StyledAboutUsInfo = styled.div`
  margin-top: 258px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    color: #810102;
  }
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #242829;
    margin: 24px 0;
  }
  span {
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    text-transform: uppercase;
    color: #810102;
    border-bottom: 3px solid #242829;
    padding-bottom: 1px;
    margin-bottom: 182px;
  }
`;
