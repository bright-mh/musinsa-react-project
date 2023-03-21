import React, { useState } from 'react';

interface DataType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const ApiTest2 = () => {
  const [todoData, setTodoData] = useState<Array<DataType>>([]);
  const [no, setNo] = useState(1)


  /**
   * 방법1.
   * no의 상태가 변경될때 useEffect안에서 api call을 한다
   * useEffect(() => {
   * ! some api call function
   * }, [no])
   * 
   * 방법2
   * 핸들러함수내에서 no기준으로 api call을 하고 그 이후에 no를 증가시킨다.
   * 
   * 로컬스토리지, 세션스토리지, 쿠키/세션 
   */

  const handleClickApi = (id?: any) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
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

export default ApiTest2;
