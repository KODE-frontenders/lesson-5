import React from "react";
import styled from "styled-components";
import { Row, RowSpaceBetween } from "shared/ui/ui";
import { ReactComponent as TrashIcon } from "shared/icons/trash-icon.svg";
import { ReactComponent as CheckboxIcon } from "shared/icons/checkbox-unchecked.svg";

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.background};
  margin: ${({ theme }) => theme.sizeGrid.triple}px;
  caret-color: ${({ theme }) => theme.colors.primary};
  border: none;
  outline: none;
  font-size: 18px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 18px;
  }
`;

const StyledCheckboxIcon = styled(CheckboxIcon)`
  color: ${({ theme }) => theme.colors.gray};
  width: ${({ theme }) => theme.sizeGrid.triple}px;
`;
const StyledTrashIcon = styled(TrashIcon)`
  color: ${({ theme }) => theme.colors.secondary};
`;

interface Props {
  todoInputValue: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TodoFormInput: React.FC<Props> = ({
  todoInputValue,
  onChangeHandler,
}) => {
  const placeholder = "What do you want to do?";

  return (
    <RowSpaceBetween>
      <Row>
        <StyledCheckboxIcon color="" />
        <StyledInput
          value={todoInputValue}
          onChange={onChangeHandler}
          placeholder={placeholder}
          type="text"
          autoFocus
        />
      </Row>

      <StyledTrashIcon color="green" />
    </RowSpaceBetween>
  );
};
