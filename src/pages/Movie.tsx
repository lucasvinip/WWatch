import React from "react";
import "../css/reset.css"
import "../css/movieDesktop.css"
import "../css/movieMobile.css"
import Logo from "../components/Logo/Logo";
import MovieDescription from "../components/MovieDescription/MovieDescription";
import MovieTitle from "../components/MovieTitle/MovieTitle";
import MovieVideo from "../components/MovieVideo/MovieVideo";
import BoxImg from "../components/BoxImg/BoxImg";

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
                        <div className="description">
                            <p>
                                Lian Maner, uma garota moderna, acidentalmente
                                se encontra em uma antiga vila rural onde conhece a excêntrica família Lian
                                , que são seus parentes distantes. Ela também conhece o enigmático e "tsundere"
                                protagonista masculino, Shen Nuo. Juntos, eles enfrentam parentes problemáticos,
                                envolvem-se em empreendimentos agrícolas e comerciais e lutam pela prosperidade.
                                À medida que pas
                                sam por diversas situações hilárias e caóticas, seu relacionamento
                                se aprofunda e eles prometem acompanhar um ao outro ao longo da vida. Com galinhas voando
                                e cachorros pulando, e com a reunião de parentes e o cultivo do arroz,
                                todos são convidados a participar da jornada agrícola.
                            </p>
                        </div>
                        <div className="film-cover-where-to-watch">
                            <BoxImg width="40vw" height="20vh"/>
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
