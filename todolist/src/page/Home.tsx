import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodayContext } from '../Router';

const Home = () => {
  const today = useContext(TodayContext);

  return (
    <>
      <h1>{today}</h1>
      <Link to="/todo">TodoList 보기</Link>
    </>
    
  )
}

export default Home;