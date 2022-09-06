import React from "react";
import {
    StyledMissionVision,
    StyledContent,
    StyledContentInfo

} from "./style";

export function MissionVision() {

  return (
    <StyledMissionVision>
        <Content
        title='Mission'
        desc='To reverse degradation of natural environment, and support societies and government to build a future in which humans live in harmony with nature, by conservation biodiversity, promoting sustainable and equitable use of renewable natural resources.'
        top={false}

        />
      <Content
        title='Vision'
        desc='A healthy and prosperous society that values, conserves and sustainably uses nature.'
        top={true}
        />
        
    
    </StyledMissionVision>
  );
}
export function Content({title,desc,top}) {

    return (
      <StyledContent top={top}>
        <StyledContentInfo top={top} >
            <h1>{title}</h1>
            <p>{desc}</p>
        </StyledContentInfo>
       
          
      
      </StyledContent>
    );
  }



