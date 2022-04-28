import React from "react";
import "@ionic/react/css/core.css";

import "./main.css";
import "./variable.css";
import "./reset.css";
import "./media_query.css";
import logo from "./images/logo.png";
import John from "./images/John-Wick-3.jpg";
import action from "./images/action.jpg";
import adventure from "./images/adventure.jpg";
import animated from "./images/animated.jpg";
import bbcamerica from "./images/bbcamerica.jpg";
import comedy from "./images/comedy.jpg";
// import funny from "./images/funny.jpeg";
import got from "./images/got.jpg";
import HBO from "./images/HBO-Logo-square.jpg";
import horror from "./images/horror.jpg";
// import icon from "./images/icon.jpg";
import planet from "./images/planet.jpg";
import sci from "./images/sci-fi.jpg";
import spider from "./images/spider-man-no-way-home.jpg";
import thriller from "./images/thriller.webp";
import crime from "./images/crime.jpg";
import vikins from "./images/vikins.jpg";
import red from "./images/movies/red-notice.jpg";
import AABC from "./images/movies/AABC.jpg";
import captain from "./images/movies/captain-marvel.jpg";
import casino from "./images/movies/casino-royale.jpg";
import dark from "./images/movies/dark-knight.jpg";
import dune from "./images/movies/dune.jpg";
import endgame from "./images/movies/endgame.jpg";
import eternals from "./images/movies/eternals.jpg";
import gladiator from "./images/movies/gladiator.jpg";
import interstaller from "./images/movies/interstaller.jpg";
import LOTR from "./images/movies/LOTR.jpg";
import matrix from "./images/movies/matrix.jpg";
import panther from "./images/movies/panther.jpg";
import saving from "./images/movies/saving-private-ryan.jpg";
import shang from "./images/movies/shang-chi.jpg";
import spiderMen from "./images/movies/spider-men.jpg";
import venom from "./images/movies/venom.jpg";
import ww84 from "./images/movies/ww84.jpg";

const HomePage = () => {
  return (
    <div className="containerHome pg1">
      <section className="banner">
        <div className="banner-card">
          <img src={John} className="banner-img" alt="" />
          <div className="card-content">
            <div className="card-info">
              <div className="genre">
                <ion-icon name="film"></ion-icon>
                <span>Action/Thriller</span>
              </div>

              <div className="year">
                <ion-icon name="calendar"></ion-icon>
                <span>2019</span>
              </div>

              <div className="duration">
                <ion-icon name="time"></ion-icon>
                <span>2h 11m</span>
              </div>

              <div className="quality">4K</div>
            </div>

            <h2 className="card-title">John Wick: Chapter 3 - Parabellum</h2>
          </div>
        </div>
      </section>

      <section className="movies">
        <div className="filter-bar">
          <div className="filter-dropdowns">
            <select name="genre" className="genre">
              <option value="all genres">All genres</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="animal">Animal</option>
              <option value="animation">Animation</option>
              <option value="biography">Biography</option>
            </select>

            <select name="year" className="year">
              <option value="all years">All the years</option>
              <option value="2022">2022</option>
              <option value="2020-2021">2020-2021</option>
              <option value="2010-2019">2010-2019</option>
              <option value="2000-2009">2000-2009</option>
              <option value="1980-1999">1980-1999</option>
            </select>
          </div>

          <div className="filter-radios">
            <input type="radio" name="grade" id="featured" checked />
            <label for="featured">Featured</label>

            <input type="radio" name="grade" id="popular" />
            <label for="popular">Popular</label>

            <input type="radio" name="grade" id="newest" />
            <label for="newest">Newest</label>

            <div className="checked-radio-bg"></div>
          </div>
        </div>

        <div className="movies-grid">
          <div className="movie-card">
            <div className="card-head">
              <img src={red} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>6.4</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">Red Notice</h3>

              <div className="card-info">
                <span className="genre">Action/Comedy</span>
                <span className="year">2021</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={spiderMen} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>7.4</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">Spider-Man: Homecoming</h3>

              <div className="card-info">
                <span className="genre">Action/Adventure</span>
                <span className="year">2017</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={matrix} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>N/A</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">The Matrix Resurrections</h3>

              <div className="card-info">
                <span className="genre">Sci-fi/Action</span>
                <span className="year">2021</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={eternals} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>6.8</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">Eternals</h3>

              <div className="card-info">
                <span className="genre">Adventure/Action</span>
                <span className="year">2021</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={dune} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>8.2</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">Dune</h3>

              <div className="card-info">
                <span className="genre">Sci-fi/Adventure</span>
                <span className="year">2021</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={AABC} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>8.3</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">1917</h3>

              <div className="card-info">
                <span className="genre">War/Drama</span>
                <span className="year">2019</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={shang} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>7.6</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">
                Shang-Chi and The Legend of The Ten Rings
              </h3>

              <div className="card-info">
                <span className="genre">Action/Fantasy</span>
                <span className="year">2021</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={casino} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>8.0</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">Casino Royale</h3>

              <div className="card-info">
                <span className="genre">Action/Adventure</span>
                <span className="year">2006</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={dark} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>9.0</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">The Dark Knight</h3>

              <div className="card-info">
                <span className="genre">Action/Adventure</span>
                <span className="year">2008</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={panther} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>7.3</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">Black Panther</h3>

              <div className="card-info">
                <span className="genre">Action/Adventure</span>
                <span className="year">2018</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={venom} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>6.7</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">Venom</h3>

              <div className="card-info">
                <span className="genre">Action/Adventure</span>
                <span className="year">2018</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={LOTR} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>8.9</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">
                Lord Of The Rings: Return Of The King
              </h3>

              <div className="card-info">
                <span className="genre">Fantasy/Adventure</span>
                <span className="year">2003</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={saving} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>8.6</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">Saving Private Ryan</h3>

              <div className="card-info">
                <span className="genre">War/Action</span>
                <span className="year">1998</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={interstaller} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>8.6</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">Interstellar</h3>

              <div className="card-info">
                <span className="genre">Sci-fi/Adventure</span>
                <span className="year">2014</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={gladiator} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>8.5</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">Gladiator</h3>

              <div className="card-info">
                <span className="genre">Action/Adventure</span>
                <span className="year">2000</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={endgame} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>8.4</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">Avengers: Endgame</h3>

              <div className="card-info">
                <span className="genre">Action/Sci-fi</span>
                <span className="year">2019</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={ww84} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>5.4</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">Wonder Woman 1984</h3>

              <div className="card-info">
                <span className="genre">Action/Adventure</span>
                <span className="year">2020</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="card-head">
              <img src={captain} alt="" className="card-img" />

              <div className="card-overlay">
                {/* <div className="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div className="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>6.8</span>
                </div> */}

                <div className="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h3 className="card-title">Captain Marvel</h3>

              <div className="card-info">
                <span className="genre">Action/Sci-fi</span>
                <span className="year">2019</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="category" id="category">
        <h2 className="section-heading">Category</h2>

        <div className="category-grid">
          <div className="category-card">
            <img src={action} alt="" className="card-img" />
            <div className="name">Action</div>
            <div className="total">100</div>
          </div>

          <div className="category-card">
            <img src={comedy} alt="" className="card-img" />
            <div className="name">Comedy</div>
            <div className="total">50</div>
          </div>

          <div className="category-card">
            <img src={thriller} alt="" className="card-img" />
            <div className="name">Thriller</div>
            <div className="total">20</div>
          </div>

          <div className="category-card">
            <img src={horror} alt="" className="card-img" />
            <div className="name">Horror</div>
            <div className="total">80</div>
          </div>

          <div className="category-card">
            <img src={adventure} alt="" className="card-img" />
            <div className="name">Adventure</div>
            <div className="total">100</div>
          </div>

          <div className="category-card">
            <img src={animated} alt="" className="card-img" />
            <div className="name">Animated</div>
            <div className="total">50</div>
          </div>

          <div className="category-card">
            <img src={crime} alt="" className="card-img" />
            <div className="name">Crime</div>
            <div className="total">20</div>
          </div>

          <div className="category-card">
            <img src={sci} alt="" className="card-img" />
            <div className="name">SCI-FI</div>
            <div className="total">80</div>
          </div>
        </div>
      </section>

      <section className="live" id="live">
        <h2 className="section-heading">Live Tv Shows</h2>

        <div className="live-grid">
          <div className="live-card">
            <div className="card-head">
              <img src={planet} alt="" className="card-img" />
              <div className="live-badge">LIVE</div>
              <div className="total-viewers">305K viewers</div>
              <div className="play">
                <ion-icon name="play-circle-outline"></ion-icon>
              </div>
            </div>

            <div className="card-body">
              <img src={bbcamerica} alt="" className="avatar" />
              <h3 className="card-title">
                Planet Earth II <br /> Season 1 - Islands
              </h3>
            </div>
          </div>

          <div className="live-card">
            <div className="card-head">
              <img src={got} alt="" className="card-img" />
              <div className="live-badge">LIVE</div>
              <div className="total-viewers">1.7M viewers</div>
              <div className="play">
                <ion-icon name="play-circle-outline"></ion-icon>
              </div>
            </div>

            <div className="card-body">
              <img src={HBO} alt="" className="avatar" />
              <h3 className="card-title">
                Game of Thrones <br /> Season 5 - Mother's Mercy
              </h3>
            </div>
          </div>

          <div className="live-card">
            <div className="card-head">
              <img src={vikins} alt="" className="card-img" />
              <div className="live-badge">LIVE</div>
              <div className="total-viewers">468K viewers</div>
              <div className="play">
                <ion-icon name="play-circle-outline"></ion-icon>
              </div>
            </div>

            <div className="card-body">
              <img src={HBO} alt="" className="avatar" />
              <h3 className="card-title">
                Vikings <br /> Season 4 - What Might Have Been
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
