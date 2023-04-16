import React from 'react';
import { TodoDataType } from '../TodoContainer';

interface TodoListItemProps {
  todoListData: TodoDataType;
  handleTodoEditInputValueChange: (no: number, todoTextChange: string) => void;
  handleClickTodoItemEdit: (no: number) => void;
  handleClickTodoItemEditComplete: (no: number) => void;
  handleClickTodoItemDelete: (no: number) => void;
}

const TodoListItem = ({ todoListData, handleTodoEditInputValueChange, handleClickTodoItemEdit, handleClickTodoItemEditComplete, handleClickTodoItemDelete }: TodoListItemProps) => {
  return (
    <div>
      {/* {todoListData.map(item => (
        <li key={item.no}>
          {item.edit ? (
            <>
              <input type='text' value={item.text} onChange={(e) => handleTodoEditInputValueChange(item.no, e.target.value)} />
              <button onClick={() => handleClickTodoItemEditComplete(item.no)}>수정 완료</button>
            </>
          ):(
            <>
              {item.text}
              <button onClick={() => handleClickTodoItemEdit(item.no)}>수정</button>
              <button onClick={() => handleClickTodoItemDelete(item.no)}>삭제</button>
            </>
          )}
        </li>
      ))} */}

      <li>
        {todoListData.edit ? (
          <>
            <input type='text' value={todoListData.text} onChange={(e) => handleTodoEditInputValueChange(todoListData.no, e.target.value)} />
            <button onClick={() => handleClickTodoItemEditComplete(todoListData.no)}>수정 완료</button>
          </>
        ):(
          <>
            {todoListData.text}
            <button onClick={() => handleClickTodoItemEdit(todoListData.no)}>수정</button>
            <button onClick={() => handleClickTodoItemDelete(todoListData.no)}>삭제</button>
          </>
        )}
      </li>
    </div>
  );
};

export default TodoListItem;