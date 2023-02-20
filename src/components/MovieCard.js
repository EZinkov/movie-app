import React from "react"

const MovieCard = ({ movie }) => {
  const { title, poster_path, overview } = movie
  const imageUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`

  return (
    <div className="flex h-[300px] flex-grow-1 w-1/3 px-4 mt-4">
      <img
        className="object-fit border rounded-md mr-2"
        src={imageUrl}
        alt={title}
      />
      <div className="">
        <h2 className="text-md font-bold">{title}</h2>
        <p className="text-sm">{overview}</p>
        <button className=" px-6 py-2 bg-red-500 rounded-full">Trailer</button>
        <button className=" px-6 py-2 bg-red-500 rounded-full">
          Add to Watchlist
        </button>
      </div>
    </div>
  )
}

export default MovieCard
