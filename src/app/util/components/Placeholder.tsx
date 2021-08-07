import styled from "styled-components";
import {AdaptiveText, AdaptiveTextProps} from "./AdaptiveText";

export const Placeholder = styled(AdaptiveText)<AdaptiveTextProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0.3;
  height: 60vh;
  width: 100%;
`;