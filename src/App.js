import { useEffect, useState } from 'react';
import './App.css';
import CityInfo from './components/CityInfo';
import { NextDayList } from './components/NextDayList';
import { Today } from './components/Today';

function App() {

  const [json, setJson] = useState()
  const [searchCity, setSearchCity] = useState('london')

  let currentDay, nextDays

  const init = () => {
    currentDay = json.currentConditions
    nextDays = json.next_days
  }


  const fetchWeather = () => {
    fetch(`https://weatherdbi.herokuapp.com/data/weather/${searchCity}`)
      .then(res => res.json())
      .then(json => setJson(json))
  }

  useEffect(() => {
    fetchWeather()
  }, [searchCity])



  json && init()


  return (
    <div className="App">
      {json &&
        <div className="weatherInfo">
          <CityInfo data={json} />
          <div className='citySearch'>
            <input type="text"
              placeholder='Search for a city'
              onKeyUp={(e) => {
                setTimeout(() => {
                  setSearchCity(e.target.value)
                }, 500);

              }} />
          </div>
          <div className="predections">
            <Today currentDay={currentDay} />
            <NextDayList nextDays={nextDays} />
          </div>
        </div>
      }
    </div>
  )
}

export default App;
