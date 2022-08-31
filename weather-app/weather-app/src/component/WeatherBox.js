import React from 'react';

const WeatherBox = ({ weather }) => {
    //console.log('웨더 정보 확인', weather);
    return (
        <div>
            <div>{weather?.name}</div> {/* weather가 참이면 실행 (삼항연산자의 또다른 표기법) */}
            <h2>
                {weather?.main.temp}℃ / {((weather?.main.temp * 9) / 5 + 32).toFixed(2)}℉
            </h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    );
};
/* 섭씨를 화씨로 변환하기 (0°C × 9/5) + 32 = 32°F */
export default WeatherBox;
