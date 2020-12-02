import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ROUTES_ICONS_MAP } from "./routes-icons-map";
import { TRoute } from "features/todos/types";

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.sizeGrid.base}px;
  padding-right: 0;
  display: block;
  line-height: 1;
`;

interface Props {
  route: TRoute;
}

export const IconLink: React.FC<Props> = ({ route }) => {
  const path = `/${route}`;

  return <StyledLink to={path}>{ROUTES_ICONS_MAP[route]}</StyledLink>;
};
