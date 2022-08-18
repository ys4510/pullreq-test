export type TodoId = string;

export type DateTime = string;

const TODO_STATUSES = [
  "working", "pending", "completed"];
export type TodoStatus = typeof TODO_STATUSES;

export type Todo = {
  id: TodoId;
  title: string;
  body: string;
  status: TodoStatus;
  createdAt: DateTime;
  updatedAt: DateTime;
  deletedAt: DateTime;
};

export type TodoInput = {
  title: string;
  body: string;
};
