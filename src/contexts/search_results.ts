import { type WeatherModel } from '@/models'
import { createContext, useContext } from 'react'

export interface SearchResultsData {
  weather: WeatherModel | undefined
  setWeather: (weather: WeatherModel) => void
}

export const SearchResultsContext = createContext<SearchResultsData>({
  weather: undefined,
  setWeather(_) {},
})

export const useSearchResultsContext = (): SearchResultsData =>
  useContext(SearchResultsContext)
