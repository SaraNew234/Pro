import React from "react";
import {
  StyledFooterLink,
  StyledFooterSocialLinks,
  StyledFooterSocialLink,
} from "./style";

import Facebook from "../../../../assets/icons/facebook.svg";
import Twitter from "../../../../assets/icons/twitter.svg";
import LinkdIn from "../../../../assets/icons/linkdin.svg";
import YouTube from "../../../../assets/icons/youTube.svg";
import Link from "next/link";
import Logo from "../../Logo";

export function FooterLinks() {
  const solcialLinks = [
    {
      icon: <Facebook />,
      to: "https://www.facebook.com",
    },
    {
      icon: <Twitter />,
      to: "https://twitter.com",
    },
    {
      icon: <LinkdIn />,
      to: "https://www.linkedin.com",
    },

    {
      icon: <YouTube />,
      to: "https://www.youtube.com",
    },
  ];
  return (
    <StyledFooterLink>
      <Logo />
      <p>
        Etiam at augue sit amet erat fringilla aliquet sed quis felis. Nunc
        sodales sapien vitae felis fringilla, quis auctor lectus vestibulum.
      </p>
      <StyledFooterSocialLinks size={solcialLinks.length}>
        {solcialLinks.map((link, index) => {
          return <FooterSocialLink key={index} icon={link.icon} to={link.to} />;
        })}
      </StyledFooterSocialLinks>
    </StyledFooterLink>
  );
}
export function FooterSocialLink({ to, icon }) {
  return (
    <StyledFooterSocialLink>
      <Link href={to} passHref>
        <a target="_blank" rel="noopener noreferrer">
          <span>{icon}</span>
        </a>
      </Link>
    </StyledFooterSocialLink>
  );
}
