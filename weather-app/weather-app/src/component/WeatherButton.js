import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const WeatherButton = ({ cities, selectCity, handleCityChange }) => {
    //console.log('도시정보 확인', cities);
    return (
        <div className='weather-button'>
            <Button className='button' size="sm" variant={`${selectCity === '' ? 'secondary' : 'outline-secondary'}`} onClick={() => handleCityChange('current')}>
            <FontAwesomeIcon icon={faLocationArrow} />
            </Button>

            {cities.map((item, index) => (
                <Button className='button' size="sm" variant={`${selectCity === item ? 'secondary' : 'outline-secondary'}`} key={index} onClick={() => handleCityChange(item)}>
                    {item}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;
