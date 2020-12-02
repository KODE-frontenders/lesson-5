import React from "react";
import { ReactComponent as TrashIcon } from "shared/icons/trash-icon.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  line-height: 1;
  transition: color ease-out 0.13s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    width: ${({ theme }) => theme.sizeGrid.double * 3}px;
    height: ${({ theme }) => theme.sizeGrid.double * 3}px;
    content: "";
    display: block;
    position: absolute;
  }
`;

type Props = {
  onDelete: () => void;
};

export const TodoDeleteButton: React.FC<Props> = ({ onDelete }) => {
  return (
    <StyledButton type="button" onClick={onDelete}>
      <TrashIcon />
    </StyledButton>
  );
};
