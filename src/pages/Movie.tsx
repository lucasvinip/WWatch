import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/reset.css"
import "../css/movieDesktop.css"
import "../css/movieMobile.css"
import Logo from "../components/Logo/Logo";
import MovieDescription from "../components/MovieDescription/MovieDescription";
import MovieTitle from "../components/MovieTitle/MovieTitle";
import MovieVideo from "../components/MovieVideo/MovieVideo";
import BoxImg from "../components/BoxImg/BoxImg";

import { getMovieById, URL_IMAGE, getTrailerMovieById, getWhereWatchById } from "../service/api";

interface MovieProps {
    title: string;
    description: string;
    image: string;
};

const Movie: React.FC = () => {
    const [movie, setMovie] = useState<MovieProps>();
    const [trailer, setTrailer] = useState<string>();
    const [logos, setLogos] = useState<string[]>();
    const { id } = useParams();

    console.log(logos);


    const getMovie = async () => {
        const data = await getMovieById(id)
        const movieInfo = { title: data.title, description: data.overview, image: data.poster_path };
        setMovie(movieInfo);
    }

    const getTrailer = async () => {
        const data = await getTrailerMovieById(id);

        if (data.lenght === 0) {
            setTrailer("No trailer found");
            console.log(data + 'No trailer found');
            return;
        }

        const ytTrailer: string = `https://www.youtube.com/embed/${data[0].key}`;
        setTrailer(ytTrailer);
    };

    const handleWhereWatch = async () => {
        const data = await getWhereWatchById(id);

        const dataAds = handleProviderName(data.ads ?? []);
        const dataFlatrate = handleProviderName(data.flatrate ?? []);
        const dataBuy = handleProviderName(data.buy ?? []);
        const dataRent = handleProviderName(data.rent ?? []);

        const dataProviders = [dataAds, dataBuy, dataRent, dataFlatrate];

        // ver sobre essa linha que nao entendi
        const allProviders = Array.from(new Set(dataProviders.flat()));

        setLogos(allProviders);

    };

    const handleProviderName = (data: { provider_name: string }[]) => {
        return data
            .map(provider => provider.provider_name)
            .filter(name =>
                name === "YouTube" || name === "Disney Plus"
                || name === "HBO Max" || name === "Amazon Video"
                || name === "Globoplay" || name === "Netflix"
            );
    };

    useEffect(() => {
        getMovie();
        getTrailer();
        handleWhereWatch();
    }, []);

    return (
        <>
            <div className="main-movie">
                <div className="container-video">
                    <MovieVideo src={trailer} style={{
                        width: "80vw",
                        height: "40vh",
                        border: "none",
                        borderRadius: "25px",
                        boxShadow: "0 2px 8px #161111"
                    }} />
                </div>
                <div className="container-video-mobile">
                    <MovieVideo src={trailer} style={{
                        width: "90vw",
                        height: "35vh",
                        border: "none",
                        borderRadius: "25px",
                        boxShadow: "0 2px 8px #161111"
                    }} />
                </div>
                <div className="container-about">
                    <div className="about">
                        <div className="title">
                            <MovieTitle title={movie?.title} />
                        </div>
                        <div className="container-description">
                            <div >
                                <MovieDescription description={movie?.description} src={URL_IMAGE + movie?.image} />
                            </div>
                        </div>
                        <div className="description">
                            <p>
                                {movie?.description}
                            </p>
                        </div>
                        <div className="film-cover-where-to-watch">
                            <BoxImg
                                width="40vw"
                                height="20vh"
                                src={URL_IMAGE + movie?.image}
                            />
                            <div className="where-to-watch">
                                <span>
                                    ONDE ASSISTIR:
                                </span>
                                {logos === undefined ? (
                                    <div>
                                        <p style={{
                                            width: "80%",
                                            textAlign: "center",
                                            fontSize: ".8rem"
                                        }}>Nenhum provedor disponível</p>
                                    </div>
                                ) : (
                                    <div>
                                        {logos?.map((logo: string) => (
                                            <Logo logo={logo} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="container-where-to-watch">
                            <div className="where-to-watch">
                                <span>
                                    ONDE ASSISTIR:
                                </span>
                                {logos === undefined ? (
                                    <div>
                                        <p style={{
                                            width: "80%",
                                            textAlign: "center",
                                            fontSize: ".8rem"
                                        }}>Nenhum provedor disponível</p>
                                    </div>
                                ) : (
                                    <div>
                                        {logos?.map((logo: string) => (
                                            <Logo logo={logo} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Movie;
