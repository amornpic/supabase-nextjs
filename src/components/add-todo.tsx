"use client";

import { ChangeEvent, FC, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {
  createTodo: (value: string) => void;
}

const AddTodo: FC<Props> = ({ createTodo }) => {
  // State for handling input value
  const [input, setInput] = useState("");

  // Event handler for input change
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Event handler for adding a new todo
  const handleAdd = async () => {
    createTodo(input);
    setInput("");
  };

  return (
    <div className="w-full flex gap-1 mt-2">
      <Input type="text" onChange={handleInput} value={input}/>
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
};

export default AddTodo;
