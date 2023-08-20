<<<<<<< HEAD
import React from "react";
// react 컴포넌트를 만들때 작성해야한다.
// 리액트 컴포넌트는 함수형태, 클래스형태 둘다 작성할 수 있다.
// 
function Hello(){
  return <div>hello react</div>  // jsx -> 자바 스크립트
}

export default Hello;
// Hello 컴포넌트를 내보낸다는 뜻
=======
import {useEffect, useState} from "react";
import axios from 'axios';
// 리액트를 불러와주어야 합니다.
function Hello(props) {
  const [board, setBoard] = useState([]);

    useEffect(() => {
      axios.get(props.link).then((free)=>{
        if(free.data){
          setBoard(free.data);
        } else{
          alert("fail");
        }
      });
    },[]);
    
  return (
    <div className="Hello">
      <ul>
        {board.map((indexs) => <li key={`${indexs}`}> 게시글 번호 {indexs.no} <i>제목:</i> {indexs.subject} <i>내용:</i> {indexs.content} 이름 {indexs.name}</li>)}
        <div>{console.log(board)}</div>
      </ul>
    </div>
    
  );
}

export default Hello;
>>>>>>> 942880d (SpringAxios)
