import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import TodoList from './page/TodoList'

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
        </Routes>
      </BrowserRouter>
    </TodayContext.Provider>
  
  )
}

export default Router