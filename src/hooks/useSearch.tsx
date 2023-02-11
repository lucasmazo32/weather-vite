import { getWeather } from '@/api'
import { useSearchResultsContext } from '@/contexts'
import { useState, type FormEventHandler } from 'react'

interface UseSearchReturn {
  handleInput: FormEventHandler<HTMLInputElement>
  handleSubmit: FormEventHandler<HTMLFormElement>
}

export const useSearch = (): UseSearchReturn => {
  const [search, setSearch] = useState<string>('')
  const { setWeather } = useSearchResultsContext()

  const handleInput: FormEventHandler<HTMLInputElement> = (e) => {
    setSearch((e.target as HTMLInputElement).value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    getWeather(search)
      .then((data) => {
        setWeather(data)
      })
      .catch((e) => {
        console.log('error', e)
      })
  }

  return { handleInput, handleSubmit }
}
