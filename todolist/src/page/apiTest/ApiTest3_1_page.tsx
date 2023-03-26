import React, { useEffect, useState } from 'react';

interface DataType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const ApiTest3_1_page = () => {
  const [todoData, setTodoData] = useState<Array<DataType>>([]);
  const [indexNumber, setIndexNumber] = useState(0);
  const [dataList, setDataList] = useState<Array<DataType>>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodoData(data));
  }, []);

  const handleClickApi = () => {
    if (indexNumber === 10) return;
    setIndexNumber(prev => prev + 1);
    // setDataList([...dataList, todoData[indexNumber]])
    setDataList((prevDataList) => [...prevDataList, todoData[indexNumber]])
  }

  return (
    <div>
      <h1>데이터 가져오기</h1>
      <button onClick={handleClickApi}>API 호출</button>
      <hr />
      <div>
        {dataList.map(item => (
          <div key={item.id}>
            userId: {item.userId}, 
            id: {item.id},
            title: {item.title},
            completed: {String(item.completed)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiTest3_1_page;
