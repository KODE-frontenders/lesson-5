import React from "react";
import styled from "styled-components";
import { ReactComponent as TodosSkeleton } from "shared/icons/todos-skeleton.svg";
import { TodoItemContainer } from "../todo-item/todo-item-container";
import { ContainerProps } from "./todo-list-container";
import { TTodo } from "features/todos/types";

const StyledSkeleton = styled(TodosSkeleton)`
  color: ${({ theme }) => theme.colors.gray};
`;

const StyledUnorderedList = styled.ul`
  padding-left: 0;
`;

const renderTodoItem = (t: TTodo) => <TodoItemContainer todo={t} key={t._id} />;

/**
 * @param todos {todo[]} список тудушек
 * @param isLoading {boolean} состояние загрузки тудушек
 * @param ititTodos {func} async action для загрузки тудушек
 */

export const TodoList: React.FC<ContainerProps> = ({
  todos = [],
  isLoading = false,
  fetchTodosRequest,
}) => {
  React.useEffect(() => {
    fetchTodosRequest(true);
  }, [fetchTodosRequest]);

  if (isLoading) {
    return <StyledSkeleton />;
  }

  if (todos.length === 0) {
    return <p>Nothing here 🤷‍♂️</p>;
  }

  return <StyledUnorderedList>{todos.map(renderTodoItem)}</StyledUnorderedList>;
};
