import React from "react";
import { StyledHeader, StyledHeaderLinks } from "./style";

import Logo from "../Logo/index";
import { useRouter } from "next/router";
export function Header() {
  const router = useRouter();
  const links = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About",
      to: "/about",
    },
    {
      label: "Projects",
      to: "/",
    },
    {
      label: "Partners",
      to: "/",
    },
    {
      label: "Contact us",
      to: "/",
    },
  ];

  return (
    <StyledHeader>
      <Logo />

      <StyledHeaderLinks>
        {links.map((link, index) => {
          return (
            <p
              key={index}
              onClick={() => {
                router.push(link.to).then();
              }}
            >
              {link.label}
            </p>
          );
        })}
      </StyledHeaderLinks>
    </StyledHeader>
  );
}
