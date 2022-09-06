import React from "react";
import { StyledLogo } from "./style";
import LogoIcon from "../../../assets/icons/logo.svg";
import Link from "next/link";
function Logo() {
  return (
    <Link href={`/`}>
      <StyledLogo>
        <LogoIcon />
      </StyledLogo>
    </Link>
  );
}

export default Logo;
