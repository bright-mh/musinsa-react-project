import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiTestDataType } from '../../types/jsonplaceholderTypes';

/** 
 * 중복되는 타입을 jsonplaceholder.ts에서 작성하고 export 해서 다른 곳에서 공통으로 사용할 수 있도록 수정하기
*/
const ApiTest4_1_page = () => {
  const [todoData, setTodoData] = useState<Array<ApiTestDataType>>([]);
  const [no, setNo] = useState(0);

  useEffect(() => {
    if(no === 0) return;

    axios.get(`https://jsonplaceholder.typicode.com/todos/${no}`)
    .then((response) => setTodoData((prevTodoData) => [...prevTodoData, response.data]))
    .catch((error) => console.log(error));
  }, [no])

  const handleClickApi = () => {
    if(no === 10) return;
    setNo(prevNo => prevNo + 1);
  }

  return (
    <div>
      <h1>데이터 가져오기</h1>
      <button onClick={handleClickApi}>API 호출</button>
      <hr />
        <div>
          {todoData.length ? todoData.map((item) => 
            <div key={item.id}>
              userId: {item.userId}, 
              id: {item.id},
              title: {item.title},
              completed: {String(item.completed)}
            </div>
          ):
          <div>데이터가 없습니다.</div>}
        </div>
    </div>
  );
};

export default ApiTest4_1_page;
