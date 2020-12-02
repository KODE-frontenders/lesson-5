import React from "react";
import { TodoFormInput } from "features/todos/molecules/todo-form-input/todo-form-input";
import { FormActionButtons } from "features/todos/molecules/form-action-buttons/form-action-buttons";
import { ContainerProps } from "./todo-add-form-container";

export const TodoAddForm: React.FC<ContainerProps> = ({
  closeModal,
  addTodoAction,
}) => {
  const [todoInputValue, setTodoInputValue] = React.useState("");

  const onChangeHandler = React.useCallback((e) => {
    const newValue = e.target.value;
    setTodoInputValue(newValue);
  }, []);

  const onCancelHandler = React.useCallback(() => {
    setTodoInputValue("");
    closeModal();
  }, [closeModal]);

  const onSubmitHandler = React.useCallback(
    (e) => {
      const todoDescription = todoInputValue;
      e.preventDefault();
      addTodoAction(todoDescription);
      setTodoInputValue("");
      closeModal();
    },
    [addTodoAction, closeModal, todoInputValue]
  );

  return (
    <form onSubmit={onSubmitHandler}>
      <FormActionButtons onCancelHandler={onCancelHandler} />

      <TodoFormInput
        todoInputValue={todoInputValue}
        onChangeHandler={onChangeHandler}
      />
    </form>
  );
};
