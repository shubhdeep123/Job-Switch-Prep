import { useDispatch } from "react-redux";
import type { Todo } from "../types/TodoType";
import { removeTodo, toggleTodo } from "../slices/todoSlice";

interface SingleTodoProp {
  todo: Todo;
}

export function SingleTodo({ todo }: SingleTodoProp) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition">
      <label className="flex items-center gap-3 flex-1 cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            dispatch(
              toggleTodo(todo.id),
            )
          }
          className="h-5 w-5 accent-blue-600 cursor-pointer"
        />

        <span
          className={`text-lg ${
            todo.completed
              ? "line-through text-slate-400"
              : "text-slate-800"
          }`}
        >
          {todo.text}
        </span>
      </label>

      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="ml-4 px-3 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
      >
        🗑️
      </button>
    </div>
  );
}