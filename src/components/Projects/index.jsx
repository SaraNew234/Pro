import React from "react";
import { StyledProjects, StyledProject, StyledProjectConatiner } from "./style";

export function Projects() {
  return (
    <StyledProjects>
      <Project src="./images/project-1.png" />
      <Project src="./images/project-2.png" />
      <Project src="./images/project-3.png" />
    </StyledProjects>
  );
}

export function Project({ src }) {
  return (
    <StyledProject>
      <StyledProjectConatiner src={src}>
        <h2>Project 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.</p>
        <button>Read more</button>
      </StyledProjectConatiner>
    </StyledProject>
  );
}
