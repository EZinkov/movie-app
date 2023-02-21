import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import SimilarMovies from "../components/SimilarMovies"
import Detail from "../components/Detail"

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(data => setMovieDetail(data))
  }, [id])

  return (
    <div>
      <Detail movieDetail={movieDetail} />
      <SimilarMovies />
    </div>
  )
}

export default MovieDetail
