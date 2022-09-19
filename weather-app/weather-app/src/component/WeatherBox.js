import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons'

const WeatherBox = ({weather, id, icon}) => {
    /* console.log('웨더 정보 확인', weather); */
    /* 오늘 날짜 데이터 함수 */
    const todayData = () => {
        const week = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
        let now = new Date();
        let todayMonth = (now.getMonth()+1) > 9 ? (now.getMonth()+1) : '0'+(now.getMonth()+1);
        let todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
        let dayOfWeek = week[now.getDay()];
        return todayMonth + '-' +todayDate +'-'+ dayOfWeek
    }
    return (
        <div className='weather_box'>
            <div className='today'>{todayData()}</div>
            <div className='location_wrap'>
                <div className="location">{weather?.name}</div> {/* weather가 참이면 실행 (삼항연산자의 또다른 표기법) */}
            </div>
            <div className='weather_data_text'>
                <h2 className='temp'>
                    {Math.round(weather?.main.temp)}º 
                </h2>
                <div className='weather_data_box'>
                    <h2 className='feels_like'><FontAwesomeIcon icon={faTemperatureHalf} /> feel like {(weather?.main.feels_like)}º </h2>
                    <h2 className='humidity'><FontAwesomeIcon className='faDroplet' icon={faDroplet} /> humidity {weather?.main.humidity}% </h2>
                </div>
                <h3 className='weather_description'>{weather?.weather[0].main}</h3>
                <h3 className='weather_icon'>
                   <img className="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                </h3>
            </div>
        </div>
    );
};

export default WeatherBox;
