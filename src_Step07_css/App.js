// import 된 css는 모든 Component 에서 공통적으로 사용할수있다.(default)
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import Play from './components/Play';
import Study2 from './components/Study2';
import Study from './components/Study';

//함수형 component
function App() {

  return (
    <div className="container">
      <h1>인덱스 페이지 입니다</h1>
      <div className="box">App.js box</div> 
      <button className='btn btn-primary'>버튼</button>  
      <Play/>
      <Study/>
      <Study2/>
    </div>
  );
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
