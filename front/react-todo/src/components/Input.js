export default ({ onChangeNewTodo, createTodo }) => {
  return (
    <>
      <header className="jumbotron">
        <h1>Todo List</h1>
      </header>
      <input
        className="newTodo"
        type="text"
        onChange={onChangeNewTodo}
        placeholder="할일을 입력해 주세요"
        val=""
      ></input>
      <button type="submit" onClick={createTodo}>
        추가
      </button>
    </>
  );
};
