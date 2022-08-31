import { useAppSelector } from "../../../app/hooks";

export const selectTodos = () => {
  const viewflag = useAppSelector((state) => state.todos.viewflag);
  const todos = useAppSelector((state) => state.todos.todos);
  if (viewflag === "deleted")
    return todos.filter((todo) => todo.deletedAt !== "");

  if (viewflag === "updated")
    return todos.filter(
      (todos) => todos.updatedAt !== "" && todos.deletedAt === ""
    );

  if (viewflag === "all") return todos.filter((todo) => todo.deletedAt === "");

  return todos;
};
