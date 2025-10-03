import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/reset.css";
import "../css/allMoviesDesktop.css";
import "../css/allMoviesMobile.css";
import BoxImg from "../components/BoxImg/BoxImg";
import TitleAndYear from "../components/TitleAndYear/TitleAndYear";
import Pagination from "../components/Pagination/Pagination";
import { getAllMoviesByGenreId, URL_IMAGE } from "../service/api";
interface MovieProps {
    id: number;
    title: string
    poster_path: string;
};
const AllMovies: React.FC = () => {
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [isActive, setIsActive] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const { year, genreId } = useParams();
    const navigate = useNavigate();
    const fetchMovies = async () => {
        const data = await getAllMoviesByGenreId(genreId, year, isActive);

        const moviesWithoutOverviewNulls = await data
            .results.filter((movie: { overview: string | null; }) => movie.overview?.trim() !== "");

        console.log(moviesWithoutOverviewNulls);

        setMovies(moviesWithoutOverviewNulls);

        // nao entendi isso direitos 
        setTotalPages(data.total_pages);
    }


    const goMovie = (movieId: number, movieTitle: string) => {
        console.log(movieId);
        navigate(`/filme/${movieId}/${movieTitle}`);
    };

    const getPageNumbers = () => {
        const pages: number[] = [];
        const start = Math.max(isActive - 2, 1);
        const end = Math.min(start + 4, totalPages);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    useEffect(() => {
        fetchMovies();
    }, [isActive]);
    return (
        <>
            <div className="main-allMovies">
                <div className="container-content">
                    <div className="content-title">
                        <TitleAndYear title={genreId} year={year} />
                    </div> <div className="content-img">
                        <div className="img-allmovies">
                            <div>
                                {movies.map((movie: MovieProps) => (
                                    <BoxImg
                                        key={movie.id}
                                        src={`${URL_IMAGE}${movie.poster_path}`}
                                        onClick={() => goMovie(movie.id, movie.title)} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="content-pagination">
                        <div className="pagination">
                            <button
                                onClick={() => setIsActive(Math.max(isActive - 1, 1))}
                                disabled={isActive === 1}
                                className="button-pagination"
                            >
                                Anterior
                            </button>
                            {getPageNumbers().map((page) => (
                                <Pagination
                                    key={page}
                                    numberPage={page}
                                    setIsActive={setIsActive}
                                    isActive={isActive}
                                />
                            ))}
                            <button
                                onClick={() => setIsActive(Math.min(isActive + 1, totalPages))}
                                disabled={isActive === totalPages}
                                className="button-pagination"
                            >
                                Seguinte
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AllMovies;