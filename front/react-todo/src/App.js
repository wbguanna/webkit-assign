import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: "Buy milk", done: false },
    { id: 2, text: "Buy milk", done: false },
    { id: 3, text: "Buy milk", done: false },
  ]);
  // const [newTodo, setNewTodo] = useState("");
  // const [cnt, setCnt] = useState(4);

  return (
    <div className="App">
      <input type="text" placeholder="할일을 입력해 주세요"></input>
      <button>추가</button>
      <ol>
        {todoList.map((e) => {
          var line = e.done ? "green wavy underline;" : "none;";
          return (
            <li>
              <input type="checkbox" />{" "}
              <p>
                <a
                  style={{
                    //For example, style={{marginRight: spacing + 'em'}} when using JSX.
                    "text-decoration": { line },
                  }}
                  href="none"
                >
                  {e.text}
                </a>
              </p>
              <button>수정</button>
              <button>X</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
