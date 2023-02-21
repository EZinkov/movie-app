import React from "react"
import { Link } from "react-router-dom"
import { AiFillStar } from "react-icons/ai"

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="p-4">
        <div className="w-64 h-[460px] overflow-scroll bg-slate-200 p-2 rounded-md mt-4">
          <img className="rounded-md" src={imageUrl} alt={movie.title} />
          <h2 className="text-sm font-bold">{movie.title}</h2>
          <div className="flex justify-between mt-2">
            <p className="text-sm">{movie.release_date.slice(0, 4)}</p>
            <div className="flex">
              <AiFillStar className="text-yellow-400" />
              <p className="text-xs ml-2">{movie.vote_average}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
