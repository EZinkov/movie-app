import React from "react"
import { Link } from "react-router-dom"

import Home from "../pages/Home"
import Wathlist from "../pages/Watchlist"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6">
      <div>
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div>
        <ul className="flex gap-6">
          <li>
            <Link className="nav__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/watchlist">
              Watchlist
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
