import React from "react";
import { StyledAbout, StyledAboutIntro } from "./style";

import { Header } from "../shared/Header";

export function AboutIntro() {
  return (
    <StyledAbout>
      <Header />
      <StyledAboutIntro>
        <p>About us / Overview</p>
      </StyledAboutIntro>
    </StyledAbout>
  );
}
