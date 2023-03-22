import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApiTest1 from './page/ApiTest1';
import ApiTest2 from './page/ApiTest2';
import Home from './page/Home';
import TodoList from './page/TodoList';
import ApiTest3_1 from './page/ApiTest3_1';
import ApiTest3_2 from './page/ApiTest3_2';
import ApiTest3_3 from './page/ApiTest3_3';

export const TodayContext = createContext('');

const Router = () => {
  const today = `${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`
  const [state, setState] = useState(today);

  return (
    <TodayContext.Provider value={state}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<TodoList />} />
          <Route path='/apitest1' element={<ApiTest1 />} />
          <Route path='/apitest2' element={<ApiTest2 />} />
          <Route path='/apitest3_1' element={<ApiTest3_1 />} />
          <Route path='/apitest3_2' element={<ApiTest3_2 />} />
          <Route path='/apiTest3_3' element={<ApiTest3_3 />} />
        </Routes>
      </BrowserRouter>
    </TodayContext.Provider>
  )
}

export default Router;