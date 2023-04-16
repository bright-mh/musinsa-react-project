import React, { useState } from 'react';
import TodoListItem from './components/TodoList';

export interface TodoDataType {
  no: number;
  text: string;
  edit: boolean;
}

let TodoData: Array<TodoDataType> = [
  // { no: 1, text: "할일 1", edit: false },
  // { no: 2, text: "할일 2", edit: false },
  // { no: 3, text: "할일 3", edit: false },
  // { no: 4, text: "할일 4", edit: false },
];

const TodoContainer = () => {
  const [todoInputValue, setTodoInputValue] = useState('');
  const [todoListData, setTodoListData] = useState(TodoData);

  const handleTodoInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInputValue(e.target.value);
  }

  const handleClickTodoItemAdd = () => {
    let todoListDataNoArray = todoListData.map(item => item.no);
    let todoListDataNoArrayNumber = Math.max(...todoListDataNoArray);

    setTodoListData([
      ...todoListData,
      {
        no: !todoListData.length ? 1 : todoListDataNoArrayNumber += 1,
        text: todoInputValue,
        edit: false,
      }
    ])

    setTodoInputValue('');
  }

  const handleEnterTodoItemAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClickTodoItemAdd();
    }
  }

  const handleTodoEditInputValueChange = (no: number, todoTextChange: string) => {
    setTodoListData(todoListData.map(item => item.no === no ? { no: item.no, text: todoTextChange, edit: item.edit } : item));
  }

  const handleClickTodoItemEdit = (no: number) => {
    setTodoListData(todoListData.map(item => item.no === no ? { no: item.no, text: item.text, edit: true } : item));
  }

  const handleClickTodoItemEditComplete = (no: number) => {
    setTodoListData(todoListData.map((item) => item.no === no ? { no: item.no, text: item.text, edit: false } : item));
  }

  const handleClickTodoItemDelete = (no: number) => {
    setTodoListData(todoListData => todoListData.filter(item => item.no !== no))
  }

  return (
    <>
      <div>
        {/* keypress 대체할 수 있는 건 뭘까? */}
        <input type='text' placeholder='할일 입력' value={todoInputValue} onChange={handleTodoInputValueChange} onKeyPress={handleEnterTodoItemAdd} />
        <button onClick={handleClickTodoItemAdd}>할일 추가</button>
      </div>
      <hr />
      <TodoListItem
        todoListData={todoListData}
        handleTodoEditInputValueChange={handleTodoEditInputValueChange}
        handleClickTodoItemEdit={handleClickTodoItemEdit}
        handleClickTodoItemEditComplete={handleClickTodoItemEditComplete}
        handleClickTodoItemDelete={handleClickTodoItemDelete}
      />
    </>
  );
};

export default TodoContainer;