import { headers, baseUrl } from "./headers";
import { TTodoResponse } from "api/types";

export const addTodo = async (
  description: string
): Promise<TTodoResponse | void> => {
  const body = JSON.stringify({ description });

  const requestOptions: RequestInit = {
    method: "POST",
    headers,
    redirect: "follow",
    body,
  };

  try {
    const response = await fetch(`${baseUrl}/task`, requestOptions);
    const result = await response.text();

    return JSON.parse(result);
  } catch (error) {
    console.error("error", error);
  }
};
