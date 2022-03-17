import React, { useEffect, useState } from "react"
import Movie from "./components/Movie"

const API_POPULAR_URL = process.env.REACT_APP_API_POPULAR_URL
const API_LATEST_URL = process.env.REACT_APP_API_LATEST_URL
const API_UPCOMING_URL = process.env.REACT_APP_API_UPCOMING_URL
const API_SEARCH_URL = process.env.REACT_APP_API_SEARCH_URL
const API_SORTED_URL = process.env.REACT_APP_API_SORTED_URL
const API_TOP_URL = process.env.REACT_APP_API_TOP_URL

export default function App() {
  const [Movies, setMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetch(API_POPULAR_URL)
    .then(response => response.json())
    .then(data => setMovies(Array.from(data.results)))    
  }, []) // About Array.from => Or add Movies.length > 0 && before Movies.map at line 28 to solve issue "map is not a function"

  const HandleOnSubmit = e => {
    e.preventDefault()

    if (setSearchQuery) {
      fetch(`${API_SEARCH_URL}${searchQuery}`)
      .then(response => response.json())
      .then(data => setMovies(Array.from(data.results)))
      // console.log(API_SEARCH_URL + searchQuery)
      console.log(Movies)

      setSearchQuery("")
    }
  }

  const HandleOnChange = e => {
    setSearchQuery(e.target.value)
  }

  const HandleOnClick = () => {
    fetch(`${API_UPCOMING_URL}`)
    .then(response => response.json())
    .then(data => setMovies(Array.from(data.results)))
    console.log(Movies)
  }

  const HandleOnPress = () => {
    fetch(API_TOP_URL)
    .then(response => response.json())
    .then(data => setMovies(Array.from(data.results)))
    console.log(Movies)
  }

  const HandleOnRefresh = () => {
    fetch(API_POPULAR_URL)
    .then(response => response.json())
    .then(data => setMovies(Array.from(data.results))) 
  }

  return (
    <>
      <header>
        <h1 title="Refresh" onClick={HandleOnRefresh}>Kaleidomovies 🎬</h1>
        <form onSubmit={HandleOnSubmit}>
          <p className="top-rated" onClick={HandleOnPress}>Cream of the crop ★</p>
          <p className="upcoming" onClick={() => HandleOnClick()}>Upcoming movies ☀</p>
          <input className="searchbar" type="search" placeholder="Search" value={searchQuery} onChange={HandleOnChange}/>
        </form>
      </header>
      <section className="movies-area">
        {Movies.map(movie => <Movie key={movie.id} {...movie}/>)}
      </section> 
    </> // Spread operator ...movie to get all the props (title, poster_path...) separated
  ) 
}
