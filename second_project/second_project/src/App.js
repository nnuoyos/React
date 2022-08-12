import { useState } from 'react';
import './App.css';

function App() {
    let counter = 0;
    const [counter2, setCounter2] = useState(0); //react hook
    const increase = () => {
        counter += 1;
        setCounter2(counter2 + 1);
        // 1. 유저가 버튼 클릭함
        // 2. 카운터가 +1이 되어서 1이 된다
        // 3. 셋스테이트함수 (셋카운터2)가 호출 된다
        // 4. 콘솔로그가 실행되는데, 이때 변수값은 1로 보여지고, 스테이트 값은 아직 변하지 않았기 때문에 그 전의 값이 보인다
        // 5. 인크리즈 함수가 끝이 난다
        // 6. 함수가 끝나면 앱이 다시 리-렌더링 된다
        // 7. let counter =0 을 거치면서 카운터 값이 다시 0으로 초기화 된다
        console.log('카운터 확인!', counter, '카운터2확인!!', counter2);
    };
    return (
        <div className="App">
            <div>{counter}</div>
            <div>state : {counter2}</div>
            <button onClick={increase}>클릭!</button>
        </div>
    );
}

export default App;
