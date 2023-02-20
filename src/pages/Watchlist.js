import React, { useState } from "react"
import { Route } from "react-router-dom"
import MovieList from "../components/MovieList"

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([])

  const addToWatchlist = movie => {
    setWatchlist([...watchlist, movie])
  }

  console.log(watchlist)

  return (
    <div>
      <h1>My Watchlist</h1>
      <Route path="/watchlist">
        <MovieList movies={watchlist} onAddToWatchlist={addToWatchlist} />
      </Route>
    </div>
  )
}

export default Watchlist
