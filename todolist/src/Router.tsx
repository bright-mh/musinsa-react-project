import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import TodoList from './page/todoList/TodoList';
import ApiTest1_page from './page/apiTest/ApiTest1_page';
import ApiTest2_page from './page/apiTest/ApiTest2_page';
import ApiTest3_1_page from './page/apiTest/ApiTest3_1_page';
import ApiTest3_2_page from './page/apiTest/ApiTest3_2_page';
import ApiTest3_2_1_page from './page/apiTest/ApiTest3_2_1_page';
import ApiTest3_3_page from './page/apiTest/ApiTest3_3_page';
import ApiTest3_3_1_page from './page/apiTest/ApiTest3_3_1_page';
import ApiTest3_3_1_1_page from './page/apiTest/ApiTest3_3_1_1_page';
import ApiTest4_1_page from './page/apiTest/ApiTest4_1_page';
import ApiTest4_2_page from './page/apiTest/ApiTest4_2_page';

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
          <Route path='/api-test1' element={<ApiTest1_page />} />
          <Route path='/api-test2' element={<ApiTest2_page />} />
          <Route path='/api-test3-1' element={<ApiTest3_1_page />} />
          <Route path='/api-test3-2' element={<ApiTest3_2_page />} />
          <Route path='/api-test3-2-1' element={<ApiTest3_2_1_page />} />
          <Route path='/api-test3-3' element={<ApiTest3_3_page />} />
          <Route path='/api-test3-3-1' element={<ApiTest3_3_1_page />} />
          <Route path='/api-test3-3-1-1' element={<ApiTest3_3_1_1_page />} />
          <Route path='/api-test4-1' element={<ApiTest4_1_page />} />
          <Route path='/api-test4-2' element={<ApiTest4_2_page />} />
        </Routes>
      </BrowserRouter>
    </TodayContext.Provider>
  )
}

export default Router;