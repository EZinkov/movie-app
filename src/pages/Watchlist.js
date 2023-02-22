import React, { useContext } from "react"
import MovieCard from "../components/MovieCard"
import { GlobalContext } from "../context/GlobalState"

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext)
  return (
    <div>
      {watchlist.length > 0 ? (
        <div className="flex flex-wrap">
          {watchlist.map(movie => (
            <div key={movie.id}>
              <MovieCard movie={movie} type={"watchlist"} />
            </div>
          ))}
        </div>
      ) : (
        <h1>Empty</h1>
      )}
    </div>
  )
}

export default Watchlist
