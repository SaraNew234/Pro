import React from "react";
import {
  StyledFooter,
  StyledFooterLinks,
  StyledLinks,
  StyledFooterCopyRight,
} from "./style";

import Link from "next/link";
import { FooterLinks } from "./FooterLinks/index";
function Footer() {
  return (
    <StyledFooter>
      <StyledFooterLinks>
        <FooterLinks />
        <FooterLink
          title="Quick links"
          links={["Home", "About us", "Projects", "Resources"]}
        />
        <FooterLink
          title="About us"
          links={["History", "Mission / Vision", "Our team", "Partners"]}
        />
        <FooterLink
          title="Projects"
          links={["Project -1", "Project -2", "Project -3", "Project -4"]}
        />
        <FooterLink
          title="Contact Info"
          links={[
            "Environment and Coffee Forest Forum, P.O.Box: 28513, Addis Ababa Ethiopia",
            "+251-116-733-707",
            "info@ecff.org.et",
          ]}
        />
      </StyledFooterLinks>
      <StyledFooterCopyRight>
        <p>© ECFF 2022.</p>
        <p>
          Powered by{" "}
          <Link href={``} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <span>M.A Technologies</span>
            </a>
          </Link>
        </p>
      </StyledFooterCopyRight>
    </StyledFooter>
  );
}

export default Footer;

export function FooterLink({ title, links }) {
  return (
    <StyledLinks>
      <h2>{title}</h2>
      {links.map((link, index) => {
        return <p key={index}>{link}</p>;
      })}
    </StyledLinks>
  );
}
