import { TTodo } from "features/todos/types";

export interface TodoUpdateBody {
  description?: string;
  _id?: string;
  completed: boolean;
}

export interface TTodoResponse {
  data: TTodo;
}
