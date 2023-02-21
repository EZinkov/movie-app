import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import MovieDetail from "./pages/MovieDetail"
import Watchlist from "./pages/Watchlist"

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
