import React, { useEffect, useState } from 'react';

interface DataType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const ApiTest1 = () => {
  const [todoData, setTodoData] = useState<Array<DataType>>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodoData(data));

    // const fetchData = async() => {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    //   const result = response.json();
    //   return result;
    // }
    
    // fetchData().then(data => setTodoData(data));
  }, []);

  return (
    <div>
      <h1>데이터 가져오기</h1>
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

export default ApiTest1;
