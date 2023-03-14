import React, { useEffect, useState } from 'react';

// interface dataType = {
//   userId: number;
//   id: number;
//   title: string;
//   compleate: boolean;
//  };

const App = () => {
  const [todoData, setTodoData] = useState<any>([]);

  useEffect(()  => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodoData(data);
      });
  }, []);

  return (
    <div>
      <h1>데이터 가져오기</h1>
      {todoData.map((item: any) => {
        <div key={item.id}>{item}</div>
      })}
    </div>
  );
};

export default App;
