import React from "react";

export const InputTodo = (props) => {
  const { todotext, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todotext} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
