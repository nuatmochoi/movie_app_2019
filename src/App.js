import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// react executes render method of class component.
class App extends React.Component { 
  state = {
    isLoading :true,
    movies : []
  };
  getMovies = async () => { // function is async -> you should wait something 
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); // wait for axios
    this.setState({ movies, isLoading:false}) // (setstate's movies:)  movies from axios
  }

  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container"> 
      {isLoading ? (
        <div className = "loader">
          <span className = "loader_text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image} 
              genres={movie.genres}
            />
          ))}
        </div>
    )}
      </section>
    );
  }
}

export default App;
