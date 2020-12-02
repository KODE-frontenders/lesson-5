import { headers, baseUrl } from "./headers";
import { TTodo } from "features/todos/types";

export const fetchTodos = async (): Promise<TTodo[] | void> => {
  const requestOptions: RequestInit = {
    method: "GET",
    headers,
    redirect: "follow",
  };

  const url = `${baseUrl}/task`;

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.text();
    const { data } = await JSON.parse(result);

    return [...data];
  } catch (error) {
    console.error("error", error);
  }
};
