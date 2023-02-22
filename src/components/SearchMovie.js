import React, { useState, useContext } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { MoviesContext } from "../context/MoviesContext"

const SearchMovie = () => {
  const [query, setQuery] = useState("")

  const { setMovies } = useContext(MoviesContext)

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY

  const handleSubmit = e => {
    e.preventDefault()

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
    )
      .then(res => res.json())
      .then(data => setMovies(data.results))
    setQuery("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-8">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <AiOutlineSearch />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search movie"
            required
            name="query"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchMovie
