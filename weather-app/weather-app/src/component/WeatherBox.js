import React from 'react';

const WeatherBox = ({ weather }) => {
    /* console.log('웨더 정보 확인', weather); */
    //오늘 날짜 데이터 함수
    const todayData = () => {
        const week = ['월','화','수','목','금','토','일'];
        let now = new Date();
        let todayMonth = (now.getMonth()+1) > 9 ? (now.getMonth()+1) : (now.getMonth()+1);
        let todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
        let dayOfWeek = week[now.getDay()];
        return todayMonth + '월 ' + todayDate + '일 ' + dayOfWeek + '요일'
    }
    return (
        <div className='weather-box'>
            <div className='today'>{todayData()}</div>
            <div className='location-wrap'>
                <div className="location">{weather?.name}</div> {/* weather가 참이면 실행 (삼항연산자의 또다른 표기법) */}
            </div>
            <div className='weather-data-text'>
                <h2 className='temp'>
                    {weather?.main.temp}º {/* / 체감온도{weather?.main.feels_like}℃ */}
                </h2>
                <h2 className='humidity'>습도 {weather?.main.humidity}% </h2>
                {/* <h2>강수{rain[0]}ml </h2> */}
                {/* <h2>바람{weather?.wind.speed} </h2> */}
                {/* <h2>강수{weather?.rain.1h} </h2> */}
                <h3 className='weather-description'>{weather?.weather[0].description}</h3>
            </div>
        </div>
    );
};
export default WeatherBox;
