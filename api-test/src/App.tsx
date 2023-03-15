import React, { useEffect, useState } from 'react';

interface dataType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
 };

const App = () => {
  const [todoData, setTodoData] = useState<Array<dataType>>([]);

  useEffect(()  => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodoData(data));
  }, []);


  return (
    <div>
      <h1>데이터 가져오기</h1>
      <div>
        {todoData.map((item, index) => 
          index < 10 ? 
          // <div key={item.id}>{JSON.stringify(item)}</div> 
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

export default App;
