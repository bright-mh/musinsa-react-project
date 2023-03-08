import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TodoList from './TodoList'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router