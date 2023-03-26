import React, { useState } from 'react';
import axios from 'axios';
import { ApiTestDataType } from '../../types/jsonplaceholderTypes';

const textColor = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];

/** 
 * 중복되는 타입을 jsonplaceholder.ts에서 작성하고 export 해서 다른 곳에서 공통으로 사용할 수 있도록 수정하기
*/
const ApiTest4_2_page = () => {
  const [todoData, setTodoData] = useState<Array<ApiTestDataType>>([]);
  const [no, setNo] = useState(1);

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

export default ApiTest4_2_page;
