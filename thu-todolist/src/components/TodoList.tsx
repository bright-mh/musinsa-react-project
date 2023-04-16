import React from 'react';
import { TodoDataType } from '../TodoContainer';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  todoListData: Array<TodoDataType>;
  handleTodoEditInputValueChange: (no: number, todoTextChange: string) => void;
  handleClickTodoItemEdit: (no: number) => void;
  handleClickTodoItemEditComplete: (no: number) => void;
  handleClickTodoItemDelete: (no: number) => void;
}

const TodoList = ({ todoListData, handleTodoEditInputValueChange, handleClickTodoItemEdit, handleClickTodoItemEditComplete, handleClickTodoItemDelete }: TodoListProps) => {
  return (
    // <ul>
    //   <TodoListItem
    //     todoListData={todoListData}
    //     handleTodoEditInputValueChange={handleTodoEditInputValueChange}
    //     handleClickTodoItemEdit={handleClickTodoItemEdit}
    //     handleClickTodoItemEditComplete={handleClickTodoItemEditComplete}
    //     handleClickTodoItemDelete={handleClickTodoItemDelete}
    //   />
    // </ul>

    <ul>
      {todoListData.map(item => {
        return (
          <TodoListItem
            key={item.no}
            todoListData={item}
            handleTodoEditInputValueChange={handleTodoEditInputValueChange}
            handleClickTodoItemEdit={handleClickTodoItemEdit}
            handleClickTodoItemEditComplete={handleClickTodoItemEditComplete}
            handleClickTodoItemDelete={handleClickTodoItemDelete}
          />
      )})}
    </ul>
  );
};

export default TodoList;