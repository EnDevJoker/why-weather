import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import InfoWeather from './components/InfoWeather'
import InfoWeather5Days from './components/InfoWeather5Days'


function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "53e18d15d73e0dbc416bfaca74c76033"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const apiData = await axios.get(url)
    const apiData5Days = await axios.get(url5Days)

    setWeather5Days(apiData5Days.data)
    setWeather(apiData.data)
  }

  return (
   <div className='container'>
    
    <h1>Previsão do Tempo</h1>
    <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
    <button onClick={searchCity}>Buscar</button>

   



    {weather && <InfoWeather weather={weather} />}
    {weather5Days && <InfoWeather5Days weather5Days={weather5Days} />}
    </div>
  )
}

export default App
