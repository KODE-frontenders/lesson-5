import { headers, baseUrl } from "./headers";
import { TTodoResponse } from "api/types";

export const deleteTodo = async (id: string): Promise<TTodoResponse | void> => {
  const requestOptions: RequestInit = {
    method: "DELETE",
    headers,
    redirect: "follow",
  };

  const url = `${baseUrl}/task/${id}`;

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.text();

    return JSON.parse(result);
  } catch (error) {
    console.error("error", error);
  }
};
