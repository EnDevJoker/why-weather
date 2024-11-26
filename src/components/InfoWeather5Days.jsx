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

    function convertDate(date) {

        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday: 'long', month: 'numeric', day: 'numeric', year: 'numeric'})
        return newDate;
    }


    return (
        <div className='weather-container'>
            <h3>Previsão dos próximos 5 Dias</h3>
            <div className='weather-list'>
            {next5Days.map(forecast => (
                <div key={forecast.dt} className='weather-item'>
                     
                    <p className='forecast-day'>{convertDate(forecast)}</p>
                    <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" /> 
                     <p className='forecast-description'>{forecast.weather[0].description}</p>
                     <p>{Math.round(forecast.main.temp_min)}°C Min / {Math.round(forecast.main.temp_max)}°C Máx</p>
                </div>
            ))}
            </div>
    </div>
    )

}

export default InfoWeather5Days;