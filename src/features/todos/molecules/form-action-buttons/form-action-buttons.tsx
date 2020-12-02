import React from "react";
import styled from "styled-components";

const StyledActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.sizeGrid.base}px 0px;
  border: none;
`;

interface Props {
  onCancelHandler: () => void;
}

export const FormActionButtons: React.FC<Props> = ({ onCancelHandler }) => {
  return (
    <StyledActionButtonsWrapper>
      <StyledActionButton type="button" onClick={onCancelHandler}>
        Cancel
      </StyledActionButton>
      <StyledActionButton type="submit">Done</StyledActionButton>
    </StyledActionButtonsWrapper>
  );
};
