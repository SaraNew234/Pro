import React from "react";
import {
  StyledPublications,
  StyledPublication,
  StyledPublicationsConatiner,
} from "./style";

export function Publications() {
  return (
    <StyledPublications>
      <h2>Publications</h2>
      <StyledPublicationsConatiner>
        <Publication
          src="./images/production-1.png"
          title="2021 Production Reports"
          desc="Description Lorem ipsum dolor sit amet, consectetur."
          size="4.1 MB   PDF"
          btn="DOWNLOAD"
          grid=" 1/3"
          titleMargin="49px"
          descMargin="399px"
          paddingTop="63px"
        />
        <Publication
          src="./images/production-2.png"
          title="2021 Production Reports"
          desc="Description Lorem ipsum dolor sit amet, consectetur."
          size=""
          btn="READ MORE"
          grid=""
          titleMargin=""
          descMargin=""
          paddingTop=""
        />
        <Publication
          src="./images/production-3.png"
          title="2021 Seminar"
          desc="Description Lorem ipsum dolor sit amet, consectetur."
          size="32 mins"
          btn="View"
          grid=""
          titleMargin=""
          descMargin=""
          paddingTop=""
        />
      </StyledPublicationsConatiner>
    </StyledPublications>
  );
}

export function Publication({
  src,
  title,
  desc,
  size,
  btn,
  grid,
  titleMargin,
  descMargin,
  paddingTop,
}) {
  return (
    <StyledPublication
      src={src}
      grid={grid}
      descMargin={descMargin}
      titleMargin={titleMargin}
      paddingTop={paddingTop}
    >
      <h2>{title}</h2>
      <p>{desc}</p>
      <span>{size}</span>
      <button>{btn}</button>
    </StyledPublication>
  );
}
