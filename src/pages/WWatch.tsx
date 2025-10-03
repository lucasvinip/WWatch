import React, { useState } from "react";
import "../css/reset.css";
import "../css/wwatchDesktop.css";
import "../css/wwatchMobile.css";
import Genres from "../components/Genres/Genres";
import Box from "../components/Box/Box";
//1920x1080

const WWatch: React.FC = () => {
  const [activeGenre, setActiveGenre] = useState<string | number>("ROMANCE");

  const genresList = ["AÇÃO", "DRAMA", "COMÉDIA", "ROMANCE", "AVENTURA"];
  const yearsList = [
    "2000", "2001", "2002", "2003", "2004", "2005",
    "2006", "2007", "2008", "2009", "2010"];

  return (
    <>
      <main>
        <div className='main-container'>
          <div className="nav-container">
            <div className='nav'>
              <div className="img-container">
                <div></div>
              </div>
              <div className="genres-container">
                <div>
                  {genresList.map((genre: string) => (
                    <Genres
                      key={genre}
                      genres={genre}
                      activeGenre={activeGenre}
                      setActiveGenre={setActiveGenre}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="container-img">
            <div className="img">
              <div></div>
            </div>
          </div>
          <div className="content-container-mobile">
            <div className="content-mobile">
              <div className="title">
                <span>
                  WWatch
                </span>
              </div>
              <div className="genres-container-mobile">
                {genresList.map((genre) => (
                  <button>
                    <Genres
                      key={genre}
                      genres={genre}
                      activeGenre={activeGenre}
                      setActiveGenre={setActiveGenre}
                    />
                  </button>
                ))}
              </div>
              <div className="movie-container-box-mobile">
                {yearsList.map((year: string) => (
                  <Box genreId={activeGenre}
                    year={year}
                    mobileOrDesktop="mobile"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="content-container">
            <div className="content">
              <div className="name-app-container-title">
                <span>
                  WWatch
                </span>
              </div>
              <div className="movies-container-box">
                <div className="movies-box">
                  <div className='movies'>
                    {yearsList.map((year: string) => (
                      <Box
                        genreId={activeGenre}
                        year={year}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default WWatch;
