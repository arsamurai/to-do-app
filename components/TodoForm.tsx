import cn from "classnames";
import { useState } from "react";

type TodoFormProps = {
  addTodo(todos: string): void;
};

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [title, setTitle] = useState("");

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handlePressKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && title) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        value={title}
        onChange={handleChangeValue}
        type="text"
        id="title"
        onKeyDown={handlePressKey}
      />
      <label htmlFor="title" className={cn("active", {"pre-active": title})}>
        Введите название дела...
      </label>
    </div>
  );
}
