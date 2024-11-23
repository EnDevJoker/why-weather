import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import InfoWeather from './components/InfoWeather'


function App() {
  const [weather, setWeather] = useState()
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "53e18d15d73e0dbc416bfaca74c76033"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiData = await axios.get(url)
    setWeather(apiData.data)
  }

  return (
   <div className='container'>
    
    <h1>Previsão do Tempo</h1>
    <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
    <button onClick={searchCity}>Buscar</button>



    {weather && <InfoWeather weather={weather} />}
    </div>
  )
}

export default App
