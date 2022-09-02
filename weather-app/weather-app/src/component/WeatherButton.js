import React from 'react';
import Button from 'react-bootstrap/Button';

const WeatherButton = ({ cities, selectCity, handleCityChange }) => {
    //console.log('도시정보 확인', cities);
    return (
        <div>
            <Button variant={`${selectCity === '' ? 'success' : 'outline-success'}`} onClick={() => handleCityChange('current')}>
                Current Location
            </Button>

            {cities.map((item, index) => (
                <Button variant={`${selectCity === item ? 'success' : 'outline-success'}`} key={index} onClick={() => handleCityChange(item)}>
                    {item}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;
