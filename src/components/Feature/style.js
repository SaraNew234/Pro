import styled from "@emotion/styled";

export const StyledFeatures = styled.div`
  padding: 160px 11vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 4vw;
  align-items: start;
`;

export const StyledFeature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.4vw;
`;

export const StyledFeatureInfo = styled.div`
  align-self: flex-start;
  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #000000;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    width: max-content;
  }
`;
