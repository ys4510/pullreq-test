export type TodoId = string;

export type DateTime = string;

export const TODO_STATUSES = [
  "waiting",
  "working",
  "pending",
  "discontinued",
  "completed",
] as const;
export type TodoStatus = typeof TODO_STATUSES[number];

export const VIEW_STATUSES = {
  "all": "全て（削除済みを除く）",
  "updated": "更新済み（削除済みを除く）",
  "deleted": "削除済み"
} as const;

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

// export type TodoUpdate = {
//   id: TodoId;
//   input: Partial<Todo>;
// };

// const VIEW_STATUSES = ["all", "updated", "deleted"] as const;
export type ViewFlag = keyof typeof VIEW_STATUSES;
const BUTTON_TYPES = ["update", "delete", "restore"] as const;
export type buttonTypes = typeof BUTTON_TYPES[number];
