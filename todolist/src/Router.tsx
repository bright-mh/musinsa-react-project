import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApiTest from './page/ApiTest3';
import ApiTest1 from './page/ApiTest1';
import ApiTest2 from './page/ApiTest2';
import Home from './page/Home';
import TodoList from './page/TodoList';
import ApiTest3 from './page/ApiTest3';

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
          <Route path='/apitest3' element={<ApiTest3 />} />
        </Routes>
      </BrowserRouter>
    </TodayContext.Provider>
  )
}

export default Router;