import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { MoviesContext } from "./context/MoviesContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"
import Watchlist from "./pages/Watchlist"
import { GlobalProvider } from "./context/GlobalState"

const App = () => {
  const [movies, setMovies] = React.useState([])
  return (
    <div className="bg-slate-800 text-white">
      <MoviesContext.Provider value={{ movies, setMovies }}>
        <GlobalProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
          </Router>
        </GlobalProvider>
      </MoviesContext.Provider>
    </div>
  )
}

export default App
