import { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, text: "Buy milk", done: false },
    { id: 2, text: "Buy milk", done: true },
    { id: 3, text: "Buy milk", done: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [cnt, setCnt] = useState(4);

  // onInputChange event
  // const updateNewTodo = (e) => {
  //   if (
  //     e.target === undefined ||
  //     e.target.value === undefined ||
  //     e.target.value === ""
  //   )
  //     return;
  //   setNewTodo(e.target.value);
  // };

  const onChangeNewTodo = (e) => {
    if (
      e.target === undefined ||
      e.target.value === undefined ||
      e.target.value === ""
    )
      return;
    setNewTodo(e.target.value);
  };

  const createTodo = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: cnt,
        text: newTodo,
        done: false,
      },
    ]);
    setCnt(cnt + 1);
  };

  const deleteTodo = (idx) => {
    setTodoList(
      todoList.filter((item) => {
        return item.id !== idx;
      })
    );
    // todoList: todoList의 item.id와 setCnt 처리를 어떻게 하냐
  };

  const editTodo = (idx, txt) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === idx) {
          item.text = txt;
        }
      })
    );
  };

  const toggleDoneTodo = (idx) => {
    setTodoList(
      todoList.map((item) => {
        item.done = item.id === idx ? !item.done : item.done;
      })
    );
  };
  return (
    <div className="App">
      <Input
        props={{ onChangeNewTodo: onChangeNewTodo, createTodo: createTodo }}
      />
      <TodoList
        props={{
          todoList: todoList,
          toggleDoneTodo: toggleDoneTodo,
          editTodo: editTodo,
          deleteTodo: deleteTodo,
        }}
      />
    </div>
  );
};

export default App;
