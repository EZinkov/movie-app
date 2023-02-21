import React, { useEffect } from "react"

const HeroSection = ({ movies, setMovies }) => {
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, [])

  return <div></div>
}

export default HeroSection
