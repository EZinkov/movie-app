import React, { useState } from "react"
import SearchMovie from "../components/SearchMovie"
import HeroSection from "../components/HeroSection"
import Movies from "../components/Movies"

const Home = () => {
  const [movies, setMovies] = useState([])
  return (
    <div>
      <HeroSection movies={movies} setMovies={setMovies} />
      <SearchMovie movies={movies} setMovies={setMovies} />
      <Movies movies={movies} setMovies={setMovies} />
    </div>
  )
}

export default Home
