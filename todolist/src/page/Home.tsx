import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodayContext } from '../Router';

const Home = () => {
  const today = useContext(TodayContext);

  return (
    <>
      <h1>{today}</h1>

      <div>
        <h2>TodoList</h2>
        <ol>
          <li><Link to="/todo">todo-list 보기</Link></li>
        </ol>
      </div>

      <div>
        <h2>API Test</h2>
        <ol>
          <li>
            <Link to="/apitest1">‘api-test’ 새 페이지 생성 후, api를 사용하여 데이터 10개 리스팅 하기</Link>
          </li>
          <li><Link to="/apitest2">버튼을 눌렀을 때 api 호출되게 변경하기</Link></li>
          <li>‘api 호출’ 버튼 클릭 시, 데이터 + 1 씩 리스팅 되게 수정 + axios 사용 하기
            <ul>
              <li><Link to="/apitest3_1">useEffect Hook에 기존의 api를 전부 받은 후, 버튼 클릭 시, 데이터 +1 해준다.</Link></li>
              <li><Link to="/apitest3_2">(수정 1) no의 상태가 변경될때 useEffect안에서 api call을 한다.</Link></li>
              <li><Link to="/apitest3_3">(수정 2) 핸들러 함수 내에서 no 기준으로 api call을 하고 그 이후에 no를 증가시킨다.</Link></li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  )
}

export default Home;