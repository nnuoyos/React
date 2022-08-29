import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//1. 앱이 실행 되자 마자 현재 위치 기반의 날씨가 보인다
//2. 지금 현재 도시와 섭씨/화씨 , 날씨 상태 정보가 나온다
//3. 하단에 도시 버튼 5개 (현재위치, 다른 도시 4개)
//4. 버튼을 누를 때 마다 해당 되는 도시별 날씨가 보여진다
//5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨 정보를 보여준다
//6. 데이터를 들고오는 동안 로딩 스피너가 돌아간다
function App() {
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            //console.log('현재 위도 경도는?', lat, lon);
            getWeatherByCurrentLocation(lat, lon);
        });
    };
    const getWeatherByCurrentLocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=81523c3aa0ea13bf7e0d71967cd5d5d4`;
        let response = await fetch(url);
        let data = await response.json();
        console.log('데이터 확인!', data);
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);
    return (
        <div>
            <div className="container">
                <WeatherBox />
                <WeatherButton />
            </div>
        </div>
    );
}

export default App;