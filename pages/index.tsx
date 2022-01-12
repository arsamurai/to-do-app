import React, { useState, useEffect } from "react";
import MainLayout from "../components/MainLayout";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { ITodo } from "../interfaces";
import { NextPageContext } from "next";
import Cookie from "js-cookie";
import cookie from 'cookie'

declare let confirm: (question: string) => boolean;

type TodosProps = {
  todosItems: string
}

export default function Todos({todosItems}: TodosProps) {
  const parsedTodos = JSON.parse(todosItems);
  const [todos, setTodos] = useState<ITodo[]>(parsedTodos);

  console.log(todosItems);

  useEffect(() => {
    Cookie.set("todos", JSON.stringify(todos))
  }, [todos]);

  const addTodoHandler = (title: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeHeandler = (id: number) => {
    const shouldRemove = confirm("Вы действительно хотите удалить?");
    shouldRemove && setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  if(!todos) {
    return <MainLayout title="To-do">
    <p className="center">Loading ...</p>
  </MainLayout>
  }
  
  return (
    <MainLayout title="To-do">
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHeandler}
      />
    </MainLayout>
  );
};

Todos.getInitialProps = async ({ req }: NextPageContext) => {
  const data = cookie.parse(req ? req.headers.cookie || "" : document.cookie)
  return {
    todosItems: data.todos
  };
};