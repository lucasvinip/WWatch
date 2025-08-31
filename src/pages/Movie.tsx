import React from "react";
import "../css/reset.css"
import "../css/movie.css"
import Logo from "../components/Logo/Logo";
import MovieDescription from "../components/MovieDescription/MovieDescription";
import MovieTitle from "../components/MovieTitle/MovieTitle";
import MovieVideo from "../components/MovieVideo/MovieVideo";

const MovieOrSerie: React.FC = () => {
    return (
        <>
            <main>
                <MovieVideo />
                <div className="container-about">
                    <div className="about">
                        <div className="title">
                            <MovieTitle />
                        </div>
                        <div className="container-description">
                            <div >
                                <MovieDescription />
                            </div>
                        </div>
                        <div className="container-where-to-watch">
                            <div className="where-to-watch">
                                <span>
                                    ONDE ASSISTIR:
                                </span>
                                <div>
                                    <Logo logo="hbo" />
                                    <Logo logo="netflix" />
                                    <Logo logo="play" />
                                    <Logo logo="disney" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MovieOrSerie;
