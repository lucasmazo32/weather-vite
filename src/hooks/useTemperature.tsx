import { useTemperatureUnitsContext } from '@/contexts'
import { type ChangeEventHandler } from 'react'

export const useTemperature = (): ChangeEventHandler<HTMLInputElement> => {
  const { setUnit } = useTemperatureUnitsContext()
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUnit(e.target.checked ? 'F' : 'C')
  }
  return handleChange
}
