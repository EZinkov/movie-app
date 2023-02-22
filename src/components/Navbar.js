import React from "react"
import { Link } from "react-router-dom"

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
            <Link className="text-white" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/watchlist">
              Watchlist
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
