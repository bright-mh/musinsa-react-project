import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodayContext } from '../Router';
import '../css/common.css';

const Home = () => {
  const today = useContext(TodayContext);

  return (
    <>
      <h1>{today}</h1>

      <div>
        <h2>TodoList</h2>
        <ol>
          <li><Link to="/todo">todo-list 보기 (context api까지 적용)</Link></li>
        </ol>
      </div>

      <div>
        <h2>API Test</h2>
        <ol>
          <li>
            <Link to="/api-test1">‘api-test’ 새 페이지 생성 후, api를 사용하여 데이터 10개 리스팅 하기</Link>
          </li>
          <li><Link to="/api-test2">버튼을 눌렀을 때 api 호출되게 변경하기</Link></li>
          <li>‘api 호출’ 버튼 클릭 시, 데이터 + 1 씩 리스팅 되게 수정
            <ul>
              <li><Link to="/api-test3-1">useEffect Hook에 기존의 api를 전부 받은 후, 버튼 클릭 시, 데이터 +1 해준다.</Link></li>
              <li>
                <Link to="/api-test3-2">(수정 1) no의 상태가 변경될 때, useEffect 안에서 api call을 한다.</Link>
                <ul>
                  <li><Link to="/api-test3-2-1">(수정 1-1) axios로 변경하기</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/api-test3-3">(수정 2) 핸들러 함수 내에서 no 기준으로 api call을 하고 그 이후에 no를 증가시킨다.</Link>
                <ul>
                  <li><Link to="/api-test3-3-1">(수정 2-1) 아래의 내용을 순차적으로 적용할 것!</Link>
                    <ol>
                      <li>데이터를 30개 호출하고, 각 텍스트는 빨강, 주황, 노랑...(무지개 색상)으로 각 줄의 텍스트가 보이도록 수정한다.</li>
                      <li>async / await로 코드 수정</li>
                      <li><Link to="/api-test3-3-1-1">(수정 2-1-1) axios 적용</Link></li>
                    </ol>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>중복되는 타입을 jsonplaceholder.ts에서 작성하고 export 해서 다른 곳에서 공통으로 사용할 수 있도록 수정하기
            <ul>
              <li><Link to="/api-test4-1">useEffect</Link></li>
              <li><Link to="/api-test4-2">핸들러 함수</Link></li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  )
}

export default Home;