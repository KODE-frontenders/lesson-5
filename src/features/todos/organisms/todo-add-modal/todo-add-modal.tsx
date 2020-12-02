import React from "react";
import styled from "styled-components";
import { TodoAddFormContainer } from "features/todos/organisms/todo-add-form/todo-add-form-container";
import { ModalTemplate } from "features/todos/atoms/modal/modal";

type Props = {
  closeModal: () => void;
  isVisible?: boolean;
};

const StyledModalTemplate = styled(ModalTemplate)`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TodoAddModal: React.FC<Props> = ({ isVisible, closeModal }) => {
  return isVisible ? (
    <StyledModalTemplate>
      <TodoAddFormContainer closeModal={closeModal} />
    </StyledModalTemplate>
  ) : null;
};

TodoAddModal.defaultProps = {
  isVisible: false,
};
