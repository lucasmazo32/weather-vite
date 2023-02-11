import { months } from '@/constants'
import { useSearchResultsContext, useTemperatureUnitsContext } from '@/contexts'
import { type FC } from 'react'

export const WeatherInfo: FC = () => {
  const { weather } = useSearchResultsContext()
  const { unit, factor, offset } = useTemperatureUnitsContext()
  const now = new Date()

  if (weather === undefined) {
    return (
      <div className="mx-auto mt-8 h-48 card w-96 bg-base-300 shadow-xl animate-pulse" />
    )
  }

  return (
    <div className="mx-auto mt-8 card w-96 bg-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {weather.name}, {weather.sys.country} -{' '}
          {months[now.getMonth() as keyof typeof months]} {now.getDate()}
        </h2>
        <div className="grid grid-cols-3">
          <span className="col-start-1 col-end-3">Current temperature</span>
          <span className="text-right">{Math.floor(weather.main.temp * factor + offset)} °{unit}</span>
          <span className="col-start-1 col-end-3">Feels like</span>
          <span className="text-right">
            {Math.floor(weather.main.feels_like * factor + offset)} °{unit}
          </span>
          <span className="col-start-1 col-end-3">Max</span>
          <span className="text-right">
            {Math.floor(weather.main.temp_max * factor + offset)} °{unit}
          </span>
          <span className="col-start-1 col-end-3">Min</span>
          <span className="text-right">
            {Math.floor(weather.main.temp_min * factor + offset)} °{unit}
          </span>
          <span className="col-start-1 col-end-3">Humidity</span>
          <span className="text-right">
            {Math.floor(weather.main.humidity)} %
          </span>
        </div>
      </div>
    </div>
  )
}
