import './App.css';
import { useState } from 'react';
import Box from './component/Box';
/* 
가위바위보 게임 만드는 로직
1. 박스 두개 만들기(사용자-컴퓨터, 사진, 결과표시가 들어간다) done
2. 가위,바위,보 버튼이 있다 done
3. 버튼을 클릭하면 클릭한 값이 박스에 보인다 done
4. 컴퓨터는 랜덤하게 아이템이 선택 된다 done
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
        img: 'https://cdn-icons.flaticon.com/png/512/4958/premium/4958318.png?token=exp=1660905885~hmac=37608b675e9087a866260f1bec296283',
    },
    paper: {
        name: 'Paper',
        img: 'https://cdn-icons-png.flaticon.com/512/1828/1828248.png',
    },
};
function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState('');
    const play = (userChoice) => {
        //userSelect = choice[userChoice] 로 사용하면 안됨
        setUserSelect(choice[userChoice]); //함수 안의 매개변수로서 작동하게 해야함
        let computerChoice = randomChoice();
        setComputerSelect(computerChoice);
        setResult(judgement(choice[userChoice], computerChoice));
    };
    const judgement = (user, computer) => {
        if (user.name === computer.name) {
            //user == computer 이렇게 작성하면 비교가 안된다, 이 값들은 객체이므로
            return 'Tie';
        } else if (user.name === 'Rock') return computer.name === 'Scissor' ? 'Win' : 'Lose';
        else if (user.name === 'Scissor') return computer.name === 'Paper' ? 'Win' : 'Lose';
        else if (user.name === 'Paper') return computer.name === 'Rock' ? 'Win' : 'Lose';
    };
    const randomChoice = () => {
        let itemArray = Object.keys(choice); //키값을 배열화 한다
        console.log('배열 만들기!', itemArray);
        //랜덤한 숫자값 들고오기
        let randomItem = Math.floor(Math.random() * itemArray.length); //랜덤값을 소수점 버리고 0,1,2 로 만들어준다
        let final = itemArray[randomItem];
        return choice[final];
    };
    return (
        <div>
            <div className="main">
                <Box title="You" item={userSelect} result={result} />
                <Box title="computer" item={computerSelect} result={result} />
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
/* 
가위바위보 로직 정리하기

-유저가 선택한 값과 컴퓨터가 선택한 값이 같으면 비긴 것
user == computer : tie
user == rock, computer == scissor : win
user == rock, computer == paper : lose
user == scissor, computer == paper : win
user == scissor, computer == rock : lose
user == paper, computer == rock : win
user == paper, computer == scissor : lose

이런식으로 경우의 수를 계산한다
*/
