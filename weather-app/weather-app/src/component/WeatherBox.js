import React from 'react';

const WeatherBox = ({ weather }) => {
    console.log('웨더 정보 확인', weather);
    return (
        <div>
            <div className="location">{weather?.name}</div> {/* weather가 참이면 실행 (삼항연산자의 또다른 표기법) */}
            <h2>
                {weather?.main.temp}℃ / 체감온도{weather?.main.feels_like}℃
            </h2>
            <h2>습도{weather?.main.humidity}% </h2>
            {/* <h2>강수{rain[0]}ml </h2> */}
            {/* <h2>바람{weather?.wind.speed} </h2> */}
            {/* <h2>강수{weather?.rain.1h} </h2> */}
            <h3>{weather?.weather[0].description}</h3>
        </div>
    );
};
export default WeatherBox;
