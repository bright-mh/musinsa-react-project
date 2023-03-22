import React, { useEffect, useState } from 'react';

interface DataType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

  /** 
   * 방법1.
   * no의 상태가 변경될때 useEffect안에서 api call을 한다
   * useEffect(() => {
   *  some api call function
   * }, [no])
  */
const ApiTest3_2 = () => {
  const [todoData, setTodoData] = useState<Array<DataType>>([]);
  const [no, setNo] = useState(1);
  const [isDataShow, setIsDataShow] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${no}`)
    .then((response) => response.json())
    .then((data) => setTodoData((prevTodoData) => [...prevTodoData, data]));
  }, [no])

  const handleClickApi = () => {
    if(no === 10) return;
    setNo(prevNo => isDataShow ? prevNo + 1 : prevNo);
    setIsDataShow(true);
  }

  return (
    <div>
      <h1>데이터 가져오기</h1>
      <button onClick={handleClickApi}>API 호출</button>
      <hr />
        <div>
          {isDataShow && todoData.map((item, index) => 
            <div key={index}>
              userId: {item.userId}, 
              id: {item.id},
              title: {item.title},
              completed: {String(item.completed)}
            </div>
          )}
        </div>
    </div>
  );
};

export default ApiTest3_2;
