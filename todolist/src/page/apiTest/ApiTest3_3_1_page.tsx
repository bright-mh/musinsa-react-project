import React, { useState } from 'react';
import axios from 'axios';

interface DataType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const textColor = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];

/** 
 * 데이터를 30개 호출하고, 각 텍스트는 빨강, 주황, 노랑...(무지개 색상)으로 각 줄의 텍스트가 보이도록 수정한다.
 * async / await로 코드 수정
*/
const ApiTest3_3_1_page = () => {
  const [todoData, setTodoData] = useState<Array<DataType>>([]);
  const [no, setNo] = useState(1);

  const handleClickApi = async (id: number) => {
    if (id > 30) return;

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const data = await response.json();
  
      setTodoData((prevTodoData) => [...prevTodoData, data]);
      setNo((prevNo) => prevNo + 1);
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>데이터 가져오기</h1>
      <button onClick={() => handleClickApi(no)}>API 호출</button>
      <hr />
      {todoData.length !== 0 ?
        <div>
          {todoData.map((item, index) => (
            <div key={item.id} style ={{ color: textColor[index % 7] }}>
              userId: {item.userId}, 
              id: {item.id},
              title: {item.title},
              completed: {String(item.completed)}
            </div>
          ))}
        </div> :
        <div>데이터가 없습니다.</div>}
    </div>
  );
};

export default ApiTest3_3_1_page;
