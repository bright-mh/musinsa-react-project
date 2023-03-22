import React, { useState } from 'react';

interface DataType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

  /** 
   * 방법2.
   * 핸들러함수내에서 no기준으로 api call을 하고 그 이후에 no를 증가시킨다.
  */
const ApiTest3_3 = () => {
  const [todoData, setTodoData] = useState<Array<DataType>>([]);
  const [no, setNo] = useState(1);

  const handleClickApi = (id: number) => {
    if (id > 10) return;

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((data) => setTodoData((prevTodoData) => [...prevTodoData, data]));

    setNo((prevNo) => prevNo + 1);
  }

  return (
    <div>
      <h1>데이터 가져오기</h1>
      <button onClick={() => handleClickApi(no)}>API 호출</button>
      <hr />
      {todoData.length !== 0 &&
        <div>
          {todoData.map((item) => 
            <div key={item.id}>
              userId: {item.userId}, 
              id: {item.id},
              title: {item.title},
              completed: {String(item.completed)}
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default ApiTest3_3;
