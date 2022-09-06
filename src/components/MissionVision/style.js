import styled from "@emotion/styled";

export const StyledMissionVision = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5vw;
  padding: 0 5vw 15vh;
  position: relative;
  background-image: url("./images/MissionVision.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledContent = styled.div`
  margin-top: ${({ top }) => (top ? "150px" : "70px")};
`;
export const StyledContentInfo = styled.div`
  background: linear-gradient(
    180deg,
    rgba(119, 10, 10, 0.2) 0%,
    rgba(0, 0, 0, 0.09) 99.99%,
    rgba(0, 0, 0, 0) 100%
  );
  backdrop-filter: blur(9px);
  background-color: transparent;
  padding: 5vh 7vw;
  text-align: center;
  border: 6px solid white;
  h1 {
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
    color: #ffffff;
    margin-top: 35px;
  }
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    margin-top: 24px;
    padding-bottom: ${({ top }) => (top ? "130px" : "10px")};
  }
`;
