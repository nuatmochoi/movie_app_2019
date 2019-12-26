import React from 'react';
import PropTypes from "prop-types"
const foodILike = [
  {
    id:1,
    name: "kimchi",
    image:"https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta-650x650.jpg",
    rating: 5
  },
  {
    id:2,
    name: "kongnamool",
    image:"https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2Ff92269b3118a4de8b948859b1b84040f.jpg",
    rating: 4.9
  },
  {
    id:3,
    name: "samgyupsal",
    image:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F9942B3395A3501C304B135",
    rating : 5.5
  },
  {
    id:4,
    name: "dongkasu",
    image:"http://homecuisine.co.kr/files/attach/images/140/039/031/d69c05ead7a6eb117d90d12e12fd302a.JPG",
    rating : 4.7
  }
];

function Food({name, picture, rating}){
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}></img>
  </div>
  }

  Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number
  };

function App() {
  return (
  <div>
    {foodILike.map(dish =>
       <Food key={dish.id}
        name={dish.name}
         picture={dish.image}
          rating={dish.rating}/>)}
  </div>
  );
}

export default App;
