import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextState } from '../context/ContextState'

const Home = () => {
  const today = useContext(ContextState);

  return (
    <>
      <h1>{today}</h1>
      <Link to="/todo">TodoList 보기</Link>
    </>
    
  )
}

export default Home