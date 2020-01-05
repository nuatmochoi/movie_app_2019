import React from 'react';
import axios from "axios";

// react executes render method of class component.
class App extends React.Component { 
  state = {
    isLoading :true,
    movies : []
  };
  getMoviews = async () => { // function is async -> you should wait something 
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json"); // wait for axios
    console.log(movies);
  }

  componentDidMount(){
    this.getMoviews();
  }
  render(){
        const { isLoading } = this.state;
        return <div> {isLoading ? "Loading...":"We are ready"} </div>;
  }
}

export default App;


