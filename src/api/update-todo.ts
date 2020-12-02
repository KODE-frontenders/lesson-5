import { NewTodoStatus } from "features/todos/types";
import { headers, baseUrl } from "./headers";
import { TodoUpdateBody } from "./types";

export const updateTodo = async (
  id: string,
  newBody: TodoUpdateBody
): Promise<NewTodoStatus | void> => {
  const newBodyString = JSON.stringify(newBody);

  const requestOptions: RequestInit = {
    method: "PUT",
    headers,
    body: newBodyString,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${baseUrl}/task/${id}`, requestOptions);
    const result = await response.text();

    return JSON.parse(result);
  } catch (error) {
    console.error("error", error);
  }
};
