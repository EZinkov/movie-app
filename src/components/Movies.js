import React, { useContext } from "react"
import MovieCard from "./MovieCard"
import { MoviesContext } from "../context/MoviesContext"

const Movies = () => {
  const { movies } = useContext(MoviesContext)
  return (
    <div>
      {movies.length > 0 && (
        <ul className="flex flex-wrap justify-around">
          {movies.map(movie => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Movies
