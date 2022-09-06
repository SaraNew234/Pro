import React from "react";
import { StyledAboutUs, StyledAboutUsImage, StyledAboutUsInfo } from "./style";

export function AboutUs() {
  return (
    <StyledAboutUs>
      <StyledAboutUsImage>
        <img src="./images/AboutUs.png" alt="" />
      </StyledAboutUsImage>
      <StyledAboutUsInfo>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          mattis id nunc vitae gravida. Aenean quis velit ante. Vestibulum
          porttitor lorem pretium porta ornare. Sed eget laoreet nibh. Donec
          vitae faucibus nulla, ut dictum urna.{" "}
        </p>
        <span>Learn More</span>
      </StyledAboutUsInfo>
    </StyledAboutUs>
  );
}
