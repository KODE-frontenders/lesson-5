import React from "react";
import styled from "styled-components";
import { Todo } from "features/todos/molecules/todo/todo";
import { TodoDeleteButton } from "features/todos/molecules/todo-delete-button/todo-delete-button";
import { Spinner } from "features/todos/atoms/spinner/spinner";
import { ContainerProps } from "./todo-item-container";

const StyledListItem = styled.li`
  padding: ${({ theme }) => theme.sizeGrid.double}px 0px;
  margin: 0px ${({ theme }) => theme.sizeGrid.double}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const TodoItem: React.FC<ContainerProps> = ({
  todo,
  loadingToggledTodoIds,
  loadingDeletedTodoIds,
  toggleTodoAction,
  deleteTodoAction,
}) => {
  const { _id: id, completed } = todo;

  const onToggleHandler = React.useCallback(
    () => toggleTodoAction({ id, completed: !completed }),
    [completed, id, toggleTodoAction]
  );

  const onDeleteHandler = React.useCallback(() => deleteTodoAction(id), [
    deleteTodoAction,
    id,
  ]);

  const isDeletingTodo = loadingDeletedTodoIds.includes(id);

  return (
    <StyledListItem>
      <Todo
        todo={todo}
        onToggleHandler={onToggleHandler}
        loadingToggledTodoIds={loadingToggledTodoIds}
      />

      {isDeletingTodo ? (
        <Spinner />
      ) : (
        <TodoDeleteButton onDelete={onDeleteHandler} />
      )}
    </StyledListItem>
  );
};
