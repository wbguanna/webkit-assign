export default ({ todoList, toggleDoneTodo, editTodo, deleteTodo }) => {
  return (
    <ol className="list-groups">
      {todoList.map((item, idx) => {
        return (
          <li key={idx} className="list-group-item list-groups-horizontal">
            <input type="checkbox" className="list-group-item" />{" "}
            <a
              className="list-group-item"
              style={{
                //For example, style={{marginRight: spacing + 'em'}} when using JSX.
                textDecoration: item.done && "red solid line-through",
              }}
              href="#none"
            >
              {item.text}
            </a>
            <button
              onClick={editTodo}
              className="btn btn-secondary list-group-item"
            >
              수정
            </button>
            <button className="btn btn-light list-group-item">🗙</button>
          </li>
        );
      })}
    </ol>
  );
};
