import React from "react";
import batman1 from "./img/batmanBegins.jpg";
import batman2 from "./img/batmanSuperman.jpg";
import batman3 from "./img/batmanNew.jpg";
import "./css/Hero1.css";

class Hero1 extends React.Component {
  render() {
    return (
      <div className="pembatas">
        <div class="kontainer">
          <div class="cards">
            <img src={batman1} alt="cardMovies" class="cardMovies" />
            <h3 class="addToFav">Add to Favourites</h3>
            <div class="contains">
              <h2 class="subject">Batman Begins</h2>
              <h3 class="categoriesCard">movie</h3>
              <h3 class="realease">Realease: 2005</h3>
            </div>
            <h3 class="detail">Detail</h3>
          </div>

          <div class="cards">
            <img src={batman2} alt="cardMovies" class="cardMovies" />
            <h3 class="addToFav">Add to Favourites</h3>
            <div class="contains">
              <h2 class="subject">Batman v Superman: Dawn of Justice</h2>
              <h3 class="categoriesCard">movie</h3>
              <h3 class="realease">Realease: 2016</h3>
            </div>
            <h3 class="detail2">Detail</h3>
          </div>

          <div class="cards">
            <img src={batman3} alt="cardMovies" class="cardMovies" />
            <h3 class="addToFav">Add to Favourites</h3>
            <div class="contains">
              <h2 class="subject">Batman</h2>
              <h3 class="categoriesCard">movie</h3>
              <h3 class="realease">Realease: 1989</h3>
            </div>
            <h3 class="detail">Detail</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero1;
