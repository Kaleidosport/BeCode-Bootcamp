import React from "react"

const API_IMAGES = process.env.REACT_APP_API_IMAGES

const setVote = (rating) => {
    return rating > 8.4 ? "gold" : rating > 7.4 ? "forestgreen" : rating > 5.9 ? "orange" : rating > 4.9 ? "darkorange" : "crimson"
}

export default function Movie({title, poster_path, release_date, overview, vote_average}) {
    return (
        <article className="movie">
            <img src={poster_path ? `${API_IMAGES}${poster_path}` : require(`./Images/movie-poster-placeholder.jpg`)} alt={title}/>
            <div className="trivia">
                <h4>{title}</h4>
                <p className={`rating ${setVote(vote_average)}`}>{vote_average}</p>
            </div>
            <div className="synopsis">
                <h3>Synopsis:</h3>
                <p>{overview}</p>
            </div>
        </article>
    )
}
