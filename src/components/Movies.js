import React from "react"
import MovieCard from "./MovieCard"

const Movies = ({ movies, setMovies }) => {
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
