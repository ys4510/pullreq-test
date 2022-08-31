import { getLocalStorageTodos } from "../localStorage/localStorage"
import { Todo } from "../types";

type T = {
  data: Todo[];
}
export const fetchTodos = async(): Promise<T> => {
  return new Promise(
    (resolve) => {
      // getting todos data from localStorage
      const todos: Todo[] = getLocalStorageTodos();
      setTimeout(() => {
        resolve({data: todos})
      }
      , 500);
    }
  );


}

