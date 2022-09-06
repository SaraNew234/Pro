import styled from "@emotion/styled";
export const StyledHome = styled.div`
  padding: 51px 5vw 0;
  padding: 30px 3vw 162px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.28) 13.2%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("./images/HomeIntro.png");
  background-repeat: no-repeat;
  background-size: cover;
  height:1080px ;
`;

export const StyledHomeIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right:22px ;

  h3 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #ffffff;
    margin-top: 340px;
  }
  p {
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    text-align: right;
    margin: 24px 0;
    color: #ffffff;
    padding-left: 50vw;
  }
  span {
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 449px;
    padding-bottom: 2px;
    border-bottom: 3px solid #ffffff;
  }
`;
