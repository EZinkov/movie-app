import React, { useState, useContext, useEffect } from "react"
import SearchMovie from "../components/SearchMovie"
import Movies from "../components/Movies"
import { MoviesContext } from "../context/MoviesContext"
import ReactPaginate from "react-paginate"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

const Home = () => {
  const { setMovies } = useContext(MoviesContext)
  const [currentPage, setCurrentPage] = useState(0)

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
      <SearchMovie />
      <div>
        <h1 className="text-center mt-6 font-bold">Popular movies now</h1>
        <Movies />
        <ReactPaginate
          previousLabel={
            <span className="w-10 h-10 flex mr-4 items-center justify-center bg-gray-300 rounded-md">
              <BsChevronLeft />
            </span>
          }
          nextLabel={
            <span className="w-10 h-10 flex ml-4 items-center justify-center bg-gray-300 rounded-md">
              <BsChevronRight />
            </span>
          }
          pageCount={10}
          onPageChange={({ selected }) => setCurrentPage(selected)}
          containerClassName="flex items-center justify-center mt-8 mb-4"
          activeClassName="bg-slate-500"
          pageClassName="block border border-solid border-gray-300 hover:bg-gray-400 w-10 h-10 flex items-center justify-center rounded-md mr-4"
          breakLabel=""
          pageRangeDisplayed={10}
        />
      </div>
    </div>
  )
}

export default Home
