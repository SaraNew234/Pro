import React from "react";
import { StyledHomeIntro, StyledHome } from "./style";

import { Header } from "../shared/Header";

export function HomeIntro() {
  return (
    <StyledHome>
      <Header />
      <StyledHomeIntro>
        <h3>Sustainability is Our Core Principle</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget vitae
          nisl ultricies at sagittis ultrices. Ultricies fringilla diam
          adipiscing a.
        </p>
        <span>Learn More</span>
      </StyledHomeIntro>
    </StyledHome>
  );
}
