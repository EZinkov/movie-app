import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AiFillStar } from "react-icons/ai"
import { GlobalContext } from "../context/GlobalState"

const MovieCard = ({ movie, type }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
  const { removeMovieFromWatchlist } = useContext(GlobalContext)

  return (
    <div className="p-4">
      <div className="w-64 h-[460px] overflow-scroll bg-slate-600 p-2 rounded-md mt-4">
        <Link to={`/movie/${movie.id}`}>
          <img className="rounded-md" src={imageUrl} alt={movie.title} />
          <h2 className="text-sm font-bold">{movie.title}</h2>
        </Link>
        <div className="flex justify-between mt-2">
          <p className="text-sm">{movie.release_date.slice(0, 4)}</p>
          <div className="flex">
            <AiFillStar className="text-yellow-400" />
            <p className="text-xs ml-2">{movie.vote_average}</p>
          </div>
        </div>
        {type === "watchlist" && (
          <>
            <button
              className="w-full py-2 bg-slate-600 text-white rounded-md mt-2"
              onClick={() => removeMovieFromWatchlist(movie.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default MovieCard
