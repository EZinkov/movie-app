import React, { useState } from "react"
import MovieCard from "./MovieCard"

const SimilarMovies = ({ similarMovies }) => {
  const [showMore, setShowMore] = useState(false)
  const [moviesToShow, setMoviesToShow] = useState(4)

  const handleClick = () => {
    setMoviesToShow(moviesToShow + 4)
  }

  return (
    <div>
      {similarMovies ? (
        <div className="flex flex-wrap justify-center">
          {similarMovies.slice(0, moviesToShow).map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : null}

      {similarMovies && !showMore && similarMovies.length > moviesToShow && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-slate-600 hover:bg-gray-400 py-2 px-4 rounded mb-4"
            onClick={handleClick}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  )
}

export default SimilarMovies
