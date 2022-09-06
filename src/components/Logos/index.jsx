import React from "react";
import { StyledLogos, StyledLogo, StyledLogoContainer } from "./style";

import Euras from "../../assets/icons/euras.svg";
import Usaid from "../../assets/icons/usaid.svg";

export function Logos() {
  return (
    <StyledLogos>
      <h1>Partners</h1>
      <StyledLogoContainer>
        <Logo icon={<Usaid />} />
        <Logo icon={<Euras />} />
        <Logo icon={<Usaid />} />
        <Logo icon={<Euras />} />
        <Logo icon={<Usaid />} />
      </StyledLogoContainer>
    </StyledLogos>
  );
}

export function Logo({ icon }) {
  return <StyledLogo>{icon}</StyledLogo>;
}
