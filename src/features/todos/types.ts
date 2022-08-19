export type TodoId = string;

export type DateTime = string;

const TODO_STATUSES = [
  "waiting",
  "working",
  "pending",
  "discontinued",
  "completed",
] as const;
type TodoStatus = typeof TODO_STATUSES[number];

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

export type TodoUpdate = {
  id: TodoId,
  input: Partial<Todo>
}