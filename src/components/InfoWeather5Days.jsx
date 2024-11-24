import './InfoWeather5Days.css'

function InfoWeather5Days({ weather5Days }) {

    let dailyInfo = {}

    for(let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if(!dailyInfo[date]) {
            dailyInfo[date] = forecast
        }
    }
    const next5Days = Object.values(dailyInfo).slice(1,6)

    return (
        <div className='weather-container'>
            <p>5 Days</p>
            {next5Days.map(forecast => (
                <div key={forecast.dt}>
                     
                    <p>Domingo</p>    
                    <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" /> 
                     <p>{forecast.weather[0].description}</p>
                     <p>{Math.round(forecast.main.temp_min)}°C Min / {Math.round(forecast.main.temp_max)}°C Máx</p>
                </div>
            ))}
    </div>
    )

}

export default InfoWeather5Days;