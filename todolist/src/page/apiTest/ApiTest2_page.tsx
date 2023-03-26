import React, { useState } from 'react';

interface DataType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const ApiTest2_page = () => {
  const [todoData, setTodoData] = useState<Array<DataType>>([]);

  const handleClickApi = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => setTodoData(data));
  }

  return (
    <div>
      <h1>데이터 가져오기</h1>
      <button onClick={handleClickApi}>API 호출</button>
      <hr />
      <div>
        {todoData.map((item, index) => 
          index < 10 ? 
          <div key={item.id}>
            userId: {item.userId}, 
            id: {item.id},
            title: {item.title},
            completed: {String(item.completed)}
          </div>
          : ''
        )}
      </div>
    </div>
  );
};

export default ApiTest2_page;
