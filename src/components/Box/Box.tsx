import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAllMoviesByGenreId, URL_IMAGE } from "../../service/api";

import BoxImg from "../BoxImg/BoxImg";
import "./box.css";


interface BoxProps {
    year: string;
    genreId: number | string;
    mobileOrDesktop?: "mobile" | "desktop";
}

interface Movie extends Pick<BoxProps, "genreId"> {
    id: number;
    poster_path: string,
    title: string
}

const Box: React.FC<BoxProps> = ({ year, mobileOrDesktop, genreId }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const navigate = useNavigate();

    const getMovies = async () => {
        const data = await getAllMoviesByGenreId(handleGenresId(genreId), year);

        const moviesWithoutOverviewNulls = await data
            .results.filter((movie: { overview: string | null; }) => movie.overview?.trim() !== "");

        const moviesArray: Movie[] = moviesWithoutOverviewNulls.map((movie: Movie) => {
            return movie;
        });

        handleRandomMovies(moviesArray);
    };

    const handleRandomMovies = (moviesArray: Movie[]) => {
        //anotar sobre o slice, sort e random

        // const firstSix = movies.slice(0, 6);
        // setMovies(firstSix);
        if (mobileOrDesktop === "mobile") {
            const randomBoxs = moviesArray.sort(() => Math.random() - 0.5)
                .slice(0, 3);
            setMovies(randomBoxs);
        } else {
            const randomBoxs = moviesArray.sort(() => Math.random() - 0.5)
                .slice(0, 6);
            setMovies(randomBoxs);
        }
    };

    const handleGenresId = (genreId: string | number) => {
        switch (genreId) {
            case "ROMANCE":
                return 10749;
            case "AÇÃO":
                return 28;
            case "AVENTURA":
                return 12;
            case "COMÉDIA":
                return 35;
            case "DRAMA":
                return 18;
            default:
                return "";
        }
    };

    const goMovie = (movieId: number, movieTitle: string) => {
        console.log(movieId);
        navigate(`/filme/${movieId}/${movieTitle}`);
    }

    const goAllMovies = () => {
        navigate(`/todos-os-filmes/${year}/${handleGenresId(genreId)}`);
    }


    useEffect(() => {
        getMovies();
    }, [handleGenresId(genreId)]);

    return (
        <div className="box">
            <div className="year">
                <span>
                    {year}
                </span>
            </div>
            <div className='moveseries-img'>
                {
                    mobileOrDesktop === "mobile" ? (
                        <>
                            {movies.map((movie: Movie) => (
                                <BoxImg
                                    src={`${URL_IMAGE}${movie.poster_path}`}
                                    onClick={() => goMovie(movie.id, movie.title)}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            {movies.map((movie: Movie) => (
                                <BoxImg
                                    src={`${URL_IMAGE}${movie.poster_path}`}
                                    onClick={() => goMovie(movie.id, movie.title)}
                                />
                            ))}
                        </>
                    )
                }
                <div className="seeall">
                    <button onClick={goAllMovies}>
                        <span>
                            VER TODOS
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Box;