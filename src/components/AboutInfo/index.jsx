import React from "react";
import {
  StyledAboutInfo,
  StyledAboutInfoImage,
  StyledAboutInfoInfo,
  StyledAboutInfoImageConatiner1,
  StyledAboutInfoImageConatiner2,
} from "./style";

export function AboutInfo() {
  return (
    <StyledAboutInfo>
      <StyledAboutInfoInfo>
        <h1>We are ECFF</h1>
        <p>
          The Environment and Coffee Forest Forum (ECFF), is a local Civil
          Society Organization registered and licenced in Ethiopia (registration
          No. 0378), and focuses on developing strategies for sustainable use
          and conservation of the environment in general, and the coffee forests
          in particular, through thematic research on conservation planning,
          education and pilot implmentation of research findings.
        </p>
        <p>
          ECFF provides services including conservation planning, practical
          implmentation of scientifically proven concepts, environmental
          education and capacity building and climate change mitigation.
        </p>
      </StyledAboutInfoInfo>

      <StyledAboutInfoImage>
        <StyledAboutInfoImageConatiner1>
          <img src="./images/Frame 13.png" alt="" />
        </StyledAboutInfoImageConatiner1>
        <StyledAboutInfoImageConatiner2>
          <img src="./images/Rectangle 19.png" alt="" />
        </StyledAboutInfoImageConatiner2>
      </StyledAboutInfoImage>
    </StyledAboutInfo>
  );
}
