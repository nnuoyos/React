import './App.css';
import Box from './component/Box';
/* 
가위바위보 게임 만드는 로직
1. 박스 두개 만들기(사용자-컴퓨터, 사진, 결과표시가 들어간다)
2. 가위,바위,보 버튼이 있다
3. 버튼을 클릭하면 클릭한 값이 박스에 보인다
4. 컴퓨터는 랜덤하게 아이템이 선택 된다
5. 3번과 4번의 결과를 가지고 승패를 따진다
6. 5번의 결과에 따라 박스 테두리 컬러가 바뀐다 (이기면 그린, 지면 레드, 비기면 블랙)
*/
const choice = {
    rock: {
        name: 'Rock',
        img: 'https://cdn-icons-png.flaticon.com/512/1527/1527445.png',
    },
    scissor: {
        name: 'Scissor',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf6a_s6F62zXqpuZlKRKn8H4YEEHscATBLrg&usqp=CAU',
    },
    paper: {
        name: 'Paper',
        img: 'https://cdn-icons-png.flaticon.com/512/1828/1828248.png',
    },
};
function App() {
    const play = (userChoice) => {
        console.log('잘 선택 되었음?!', userChoice);
    };
    return (
        <div>
            <div className="main">
                <Box title="You" />
                <Box title="computer" />
            </div>
            <div className="main">
                <button onClick={() => play('scissor')}>가위</button>
                <button onClick={() => play('rock')}>바위</button>
                <button onClick={() => play('paper')}>보</button>
            </div>
        </div>
    );
}

export default App;
