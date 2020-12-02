import React from "react";
import { TodoAddModal } from "features/todos/organisms/todo-add-modal/todo-add-modal";
import { TodoAddButton } from "features/todos/molecules/todo-add-button/todo-add-button";

export const TodosAdd = () => {
  const [isModalVisible, setModalVisibility] = React.useState(false);

  const onToggleFormHandler = React.useCallback(
    () => setModalVisibility(!isModalVisible),
    [isModalVisible]
  );
  const closeModalHandler = React.useCallback(
    () => setModalVisibility(false),
    []
  );

  return (
    <>
      <TodoAddButton onToggle={onToggleFormHandler} />
      <TodoAddModal isVisible={isModalVisible} closeModal={closeModalHandler} />
    </>
  );
};
