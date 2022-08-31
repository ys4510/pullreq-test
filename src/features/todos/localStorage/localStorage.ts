import { Todo } from "../types"

const TODOS_KEY = 'todos-localStorage'
export const setLocalStorageTodos = (todos: Todo[]) => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

export const getLocalStorageTodos = (): Todo[] => {

  const json = localStorage.getItem(TODOS_KEY);
  // json : string | null
  if (!json) return [] as Todo[];
  return JSON.parse(json) as Todo[];

} ;
