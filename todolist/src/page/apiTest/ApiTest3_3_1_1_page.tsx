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
 * axios 적용
*/
const ApiTest3_3_1_1_page = () => {
  const [todoData, setTodoData] = useState<Array<DataType>>([]);
  const [no, setNo] = useState(1);

  // [질문!] 두 가지 방법 중, 어느 것이 맞을까요?
  // const handleClickApi = async (id: number) => {
  //   if (id > 30) return;

  //   try {
  //     const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);

  //     setTodoData((prevTodoData) => [...prevTodoData, response.data]);
  //     setNo((prevNo) => prevNo + 1);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleClickApi = async (id: number) => {
    if (id > 30) return;

    await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => setTodoData((prevTodoData) => [...prevTodoData, response.data]))
      .catch(error => console.log(error.message));

    setNo((prevNo) => prevNo + 1);
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

export default ApiTest3_3_1_1_page;
