import React from 'react' 
import './MovieCard.css' 
import Star from '../../assets/star.png'

const MovieCard = ({movie,apptog}) => {
  return (
   <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' className="movie_card" dir={`${apptog?'rtl':'ltr'}`} >
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="aladin" className="movie_poster" /> 
    <div className="movie_details"  >
        <h3 className="movie_details_heading">{movie.orginal_title}</h3>
        <div className="movie_date_rate align_center">
            <p>{movie.vote_average} <img src={Star} alt="rating_icon"  className='card_emoji'/></p>
            <p>{movie.release_date}</p> 
        </div> 
        <p className="movie_description">
            {movie.overview.slice(0,100) + "..."}
        </p>

    </div>
   </a>
  )
}

export default MovieCard
