import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import TodoList from './page/TodoList'
import { ContextState } from './context/ContextState'

const Router = () => {
  const today = `${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`

  return (
    <ContextState.Provider value ={today}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </ContextState.Provider>
  )
}

export default Router