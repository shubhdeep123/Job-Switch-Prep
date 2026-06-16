import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleTodo } from "./SingleTodo";
import type { RootState } from "../store/store";
import { addTodo, setFilter } from "../slices/todoSlice";

export function TodoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const filter = useSelector((state: RootState) => state.todo.filter);

  const dispatch = useDispatch();

  const [task, setTask] = useState("");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const handleAddTodo = () => {
    if (!task.trim()) return;

    dispatch(
      addTodo({
        id: Date.now(),
        text: task,
        completed: false,
      }),
    );

    setTask("");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start p-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">📝 Todo App</h1>

        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Enter your task..."
            className="flex-1 px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTodo();
              }
            }}
          />

          <button
            onClick={handleAddTodo}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Add Task +
          </button>

          <select
            value={filter}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              dispatch(
                setFilter(e.target.value as "all" | "active" | "completed"),
              )
            }
            className="px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Tasks</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="space-y-3">
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <SingleTodo key={todo.id} todo={todo} />
            ))
          ) : (
            <div className="text-center text-slate-500 py-8">
              No todos found
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          Total Tasks: {todos.length}
        </div>
      </div>
    </div>
  );
}
