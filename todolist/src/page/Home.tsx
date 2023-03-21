import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodayContext } from '../Router';

const Home = () => {
  const today = useContext(TodayContext);

  return (
    <>
      <h1>{today}</h1>
      <ul>
        <li><Link to="/todo">todo-list 보기</Link></li>
        <li><Link to="/apitest1">‘api-test’ 새 페이지 생성 후, api를 사용하여 데이터 10개 리스팅 하기</Link></li>
        <li><Link to="/apitest2">버튼을 눌렀을 때 api 호출되게 변경하기</Link></li>
        <li><Link to="/apitest3">‘api 호출’ 버튼 클릭 시, 데이터 + 1 씩 리스팅 되게 수정 + axios 사용 하기</Link></li>
      </ul>
    </>
    
  )
}

export default Home;