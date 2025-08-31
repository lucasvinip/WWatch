import React from "react";
import "./css/reset.css";
import "./css/appDesktop.css";
import "./css/appMobile.css";
import Genres from "./components/Genres/Genres";
import Box from "./components/Box/Box";
//1920x1080

const App: React.FC = () => {
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
                  <Genres genres="AÇÃO" />
                  <Genres genres="DRAMA" />
                  <Genres genres="COMÉDIA" />
                  <Genres genres="ROMANCE" />
                  <Genres genres="AVENTURA" />
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
                <button>
                  <Genres genres="AÇÃO" />
                </button>
                <button>
                  <Genres genres="DRAMA" />
                </button>
                <button>
                  <Genres genres="COMÉDIA" />
                </button>
                <button>
                  <Genres genres="ROMANCE" />
                </button>
                <button>
                  <Genres genres="AVENTURA" />
                </button>
              </div>
              <div className="movie-container-box-mobile">
                <Box year={2000} threeOrSix="mobile" />
                <Box year={2001} threeOrSix="mobile" />
                <Box year={2002} threeOrSix="mobile" />
                <Box year={2003} threeOrSix="mobile" />
                <Box year={2004} threeOrSix="mobile" />
                <Box year={2005} threeOrSix="mobile" />
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
                    <Box year={2000} />
                    <Box year={2001} />
                    <Box year={2002} />
                    <Box year={2003} />
                    <Box year={2004} />
                    <Box year={2005} />
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

export default App;
