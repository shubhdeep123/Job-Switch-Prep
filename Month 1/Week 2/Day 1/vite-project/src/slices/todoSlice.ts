import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../types/TodoType";

type FILTER_LITERAL = "all" | "active" | "completed";

interface TodoState {
  todos: Todo[];
  filter: FILTER_LITERAL;
}

const initialState: TodoState = {
  todos: [],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const todo = action.payload;
      state.todos.push({
        ...todo,
      });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const todo = state.todos.find((todo) => todo.id == id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setFilter: (state, action: PayloadAction<FILTER_LITERAL>) => {
      const filter = action.payload;
      state.filter = filter;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, setFilter } = todoSlice.actions;

export default todoSlice.reducer;
