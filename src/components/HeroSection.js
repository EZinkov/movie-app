import React, { useEffect, useContext, useState } from "react"
import { MoviesContext } from "../context/MoviesContext"
import ReactPaginate from "react-paginate"

const HeroSection = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const { setMovies } = useContext(MoviesContext)
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${
        currentPage + 1
      }`
    )
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, [setMovies, currentPage])

  return (
    <div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={10} // Change this to the total number of pages
        onPageChange={({ selected }) => setCurrentPage(selected)}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  )
}

export default HeroSection
