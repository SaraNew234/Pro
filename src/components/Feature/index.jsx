import React from "react";
import { StyledFeatures, StyledFeature, StyledFeatureInfo } from "./style";

import Farm from "../../assets/icons/farm.svg";
import Technique from "../../assets/icons/technique.svg";
import Export from "../../assets/icons/export.svg";
import Harvest from "../../assets/icons/harvest.svg";

export function Features() {
  return (
    <StyledFeatures>
      <Feature icon={<Farm />} total="12,000" desc="Hectares of farm" />
      <Feature icon={<Technique />} total="75" desc="Units of technique" />
      <Feature icon={<Harvest />} total="2000" desc="Tons of harvest" />
      <Feature icon={<Export />} total="$ 500K+" desc="Worth exported" />
    </StyledFeatures>
  );
}

export function Feature({ icon, total, desc }) {
  return (
    <StyledFeature>
      {icon}
      <StyledFeatureInfo>
        <h2>{total}</h2>
        <p>{desc}</p>
      </StyledFeatureInfo>
    </StyledFeature>
  );
}
