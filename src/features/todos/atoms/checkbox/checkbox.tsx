import React from "react";
import styled from "styled-components";

type Props = {
  onToggle: () => void;
  completed: boolean;
};

const StyledInput = styled.input.attrs((props) => ({
  checked: props.checked || false,
}))`
  appearance: none;

  &::after {
    content: ${({ checked }) => (checked ? "'✓'" : "''")};
    width: ${({ theme }) => theme.sizeGrid.triple}px;
    height: ${({ theme }) => theme.sizeGrid.triple}px;
    border-color: ${({ checked, theme }) =>
      checked ? theme.colors.primary : theme.colors.gray};
    background-color: ${({ checked, theme }) =>
      checked ? theme.colors.primary : "transparent"};
    color: ${({ theme }) => theme.colors.background};

    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
  }

  &::before {
    width: ${({ theme }) => theme.sizeGrid.double * 3}px;
    height: ${({ theme }) => theme.sizeGrid.double * 3}px;
    content: "";
    display: block;
    position: absolute;
  }
`;

export const Checkbox: React.FC<Props> = ({ completed, onToggle }) => (
  <StyledInput type="checkbox" checked={completed} onChange={onToggle} />
);
