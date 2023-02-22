import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Detail = ({ movieDetail }) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext)

  let storedMovie = watchlist.find(o => o.id === movieDetail.id)

  const watchlistDisabled = storedMovie ? true : false

  const {
    overview,
    release_date,
    poster_path,
    runtime,
    tagline,
    title,
    vote_average,
    vote_count,
  } = movieDetail
  const imageUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`
  return (
    <div className="flex flex-col mt-10 px-6 sm:justify-center sm:w-full sm:flex-row">
      <img className="rounded-xl" src={imageUrl} alt={imageUrl.title} />
      <div className="sm:ml-20">
        <h1 className="font-extrabold text-lg">{title}</h1>
        <p>
          <span className="font-semibold">Rating: </span>
          <span className="font-bold">IMDb: </span> {vote_average} ({vote_count}
          )
        </p>
        {tagline ? (
          <p>
            <span className="font-semibold">Slogan:</span> {tagline}
          </p>
        ) : null}
        {release_date ? (
          <p>
            <span className="font-semibold">Year: </span>
            {release_date.slice(0, 4)}
          </p>
        ) : null}

        <p>
          <span className="font-semibold">Runtime: </span>
          {runtime}
        </p>
        <p>
          <span className="font-semibold">
            What is the movie {title} about:{" "}
          </span>{" "}
          <br />
          {overview}
        </p>
        <div className="text-center mt-4 lg:w-2/4">
          <button
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movieDetail)}
            className="py-4 px-8 w-full rounded-xl bg-slate-400"
          >
            Add to watchlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default Detail
