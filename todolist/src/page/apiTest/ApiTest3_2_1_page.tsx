import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface DataType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

/** 
 * axios 적용
*/
const ApiTest3_2_1_page = () => {
  const [todoData, setTodoData] = useState<Array<DataType>>([]);
  const [no, setNo] = useState(0);

  useEffect(() => {
    if(no === 0) return;

    axios.get(`https://jsonplaceholder.typicode.com/todos/${no}`)
    .then((response) => setTodoData((prevTodoData: DataType[]) => [...prevTodoData, response.data]))
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

export default ApiTest3_2_1_page;
