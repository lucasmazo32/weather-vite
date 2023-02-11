import { type WeatherModel } from '@/models'

export const getWeather = async (city: string): Promise<WeatherModel> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${
    import.meta.env.VITE_WEATHER
  }`
  const options: RequestInit = {
    method: 'GET',
    redirect: 'follow',
  }
  const response = await fetch(url, options)
  if (response.status !== 200) {
    throw new Error('Not found')
  }
  const data = await response.json()
  return data as WeatherModel
}
