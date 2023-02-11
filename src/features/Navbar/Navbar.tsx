import { useSearch, useTemperature } from '@/hooks'
import { type FC } from 'react'

export const Navbar: FC = () => {
  const { handleInput, handleSubmit } = useSearch()
  const handleTemperature = useTemperature()

  return (
    <nav className="navbar bg-base-200 px-20">
      <div className="navbar-start">
        <h1 className="font-bold text-lg">Weather APP</h1>
      </div>
      <div className="navbar-center">
        <form
          className="flex gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            onInput={handleInput}
            placeholder="Type your city..."
            className="input input-primary"
          />
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate btn btn-secondary">
          <input
            type="checkbox"
            onChange={handleTemperature}
          />
          <span className="swap-on">°F</span>
          <span className="swap-off">°C</span>
        </label>
      </div>
    </nav>
  )
}
