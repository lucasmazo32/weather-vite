import { createContext, useContext } from 'react'

export type temperatureUnit = 'C' | 'F'

export interface TemperatureUnitsData {
  factor: number
  offset: number
  unit: temperatureUnit
  setUnit: (t: temperatureUnit) => void
}

export const TemperatureUnitsContext = createContext<TemperatureUnitsData>({
  factor: 1,
  offset: 0,
  unit: 'C',
  setUnit() {},
})

export const useTemperatureUnitsContext = (): TemperatureUnitsData =>
  useContext(TemperatureUnitsContext)
