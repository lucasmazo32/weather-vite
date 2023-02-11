import { useState, type FC } from 'react'
import {
  SearchResultsContext,
  TemperatureUnitsContext,
  type TemperatureUnitsData,
  type SearchResultsData,
  type temperatureUnit,
} from './contexts'
import { Navbar, WeatherInfo } from './features'
import { type WeatherModel } from './models'

export const App: FC = () => {
  const [weather, setWeather] = useState<WeatherModel | undefined>(undefined)
  const [factor, setFactor] = useState<number>(1)
  const [offset, setOffset] = useState<number>(0)
  const [unit, setUnit] = useState<temperatureUnit>('C')
  const searchValue: SearchResultsData = { weather, setWeather }

  const handleSetUnit = (t: temperatureUnit): void => {
    setUnit(t)
    if (t === 'C') {
      setFactor(1)
      setOffset(0)
    } else {
      setFactor(9 / 5)
      setOffset(32)
    }
  }

  const temperatureInfoValue: TemperatureUnitsData = {
    factor,
    offset,
    unit,
    setUnit: handleSetUnit,
  }

  return (
    <div className="App">
      <SearchResultsContext.Provider value={searchValue}>
        <TemperatureUnitsContext.Provider value={temperatureInfoValue}>
          <Navbar />
          <WeatherInfo />
        </TemperatureUnitsContext.Provider>
      </SearchResultsContext.Provider>
    </div>
  )
}

export default App
