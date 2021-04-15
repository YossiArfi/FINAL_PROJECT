import React, { useState } from 'react'
const api = {
    key: "a4be73e56007313c465929d3dbba6a28",
    base: "https://api.openweathermap.org/data/2.5/"
}


const Meteo = () => {

    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <>
            <h1 className='text-center mb-4' id='weather-app'>Dive Sites Weather</h1>

            <div
                className={
                    (typeof weather.main != "undefined") ?
                        ((weather.main.temp > 16) ?
                            'back warm' :
                            'back')
                        : 'back'}>


                <div className='meteo-main'>
                    <div className="search-box-meteo">
                        <input
                            type="text"
                            className="search-bar-meteo"
                            placeholder="Search for a dive site weather..."
                            onChange={e => setQuery(e.target.value)}
                            value={query}
                            onKeyPress={search}
                        />
                    </div>
                    {(typeof weather.main != "undefined") ? (
                        <>
                            <div className="location-box">
                                <div className="location-meteo">
                                    {weather.name}, {weather.sys.country}
                                </div>

                                <div className="date-meteo">
                                    {dateBuilder(new Date())}
                                </div>
                            </div>

                            <div className="weather-box">
                                <div className="temperature">
                                    {Math.round(weather.main.temp)}°C
          </div>
                                <div className="weather">
                                    {weather.weather[0].main}
                                </div>
                            </div>
                        </>
                    ) : ('')}
                </div>

            </div>
        </>
    )
}

export default Meteo


