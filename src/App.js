import logo from './logo.svg';
import './App.css';

// 0. React 엔진 - 데이터 변경을 감지해서 UI를 그려주는!!
// 1. 실행과정 (index.html) - SPA (Single Page Application)
// 2. JSX 문법
// (1) return 시에 하나의 Dom만 리턴할 수 있다.
// (2) 변수선언은 let 혹은 const로만 해야 함.
// (3) if 사용 불가 -> 삼항연산자 (조건? 값(true) : 값(false)
// (4) 조건부 렌더링(조건 && 값(true))
// (5) css디자인
//     - 내부에 적는 방법
//     - 외부 파일에 적는 방법
//     - 라이브러리 사용(부트스트랩, component-styled)
// 3. 바벨(자바스크립트 ES5) -> ES6 / ES6로 개발하지만 ES5로도 돌아가게 한 프로젝트


let a = 10; // 변수
const b = 20; // 상수

const mystyle ={
    color:"red",

};

function App() {
    let c;
    let d = undefined;
  return (
      <div>
        <div style={mystyle}>
            안녕21 {a === 10 ? '10입니다.' : '10이 아닙니다.'}
            <h1 className="box-style">해딩태그 {b === 20 && '20입니다.'}</h1>
        </div>
      </div>

  );
}

export default App;
