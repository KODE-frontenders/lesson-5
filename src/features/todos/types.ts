export type TTodo = {
  _id: string;
  completed: boolean;
  description: string;
  owner?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type TRoute = "settings" | "todos";

export interface NewTodoStatus {
  id: string;
  completed: boolean;
}
