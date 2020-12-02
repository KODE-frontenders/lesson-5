import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  max-height: 100%;
  overflow-y: scroll;
`;

export const Body: React.FC = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};
