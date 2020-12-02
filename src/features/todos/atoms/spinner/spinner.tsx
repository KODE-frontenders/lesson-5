import React from "react";
import { ReactComponent as SpinnerIcon } from "shared/icons/spinner.svg";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled(SpinnerIcon)`
  color: ${({ theme }) => theme.colors.secondary};
  animation: ${rotate} 0.5s linear infinite;
`;

export const Spinner: React.FC = () => {
  return <StyledSpinner />;
};
