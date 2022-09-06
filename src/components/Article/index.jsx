import React from "react";
import { StyledArticle } from "./style";

import Link from "next/link";
import Image from "next/image";

export function Article({ color, src, desc }) {
  const img="./images/Rectangle 22.png"
  return (
    <StyledArticle color={color}>
      <img src={src?src:img} alt="" />
      <p>{desc}</p>
    </StyledArticle>
  );
}
