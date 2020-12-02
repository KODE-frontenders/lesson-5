import React from "react";
import styled from "styled-components";
import { Header } from "shared/molecules/header/header";
import { Body } from "shared/atoms/body/body";
import { TRoute } from "features/todos/types";

const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.sizeGrid.double}px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
`;

interface Props {
  title: string;
  linkTo: TRoute;
}

export const PageTemplate: React.FC<Props> = ({ children, title, linkTo }) => {
  return (
    <PageWrapper>
      <Header title={title} linkTo={linkTo} />
      <Body>{children}</Body>
    </PageWrapper>
  );
};
