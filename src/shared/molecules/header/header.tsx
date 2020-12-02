import React from "react";
import styled from "styled-components";
import { IconLink } from "features/todos/molecules/icon-link/icon-link";
import { TRoute } from "features/todos/types";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeading = styled.h1`
  font-size: 32px;
  font-weight: normal;
  margin: ${({ theme }) => theme.sizeGrid.double};
`;

interface Props {
  title: string;
  linkTo: TRoute;
}

export const Header: React.FC<Props> = ({ title, linkTo }) => {
  return (
    <StyledHeader>
      <StyledHeading>{title}</StyledHeading>
      <IconLink route={linkTo} />
    </StyledHeader>
  );
};
