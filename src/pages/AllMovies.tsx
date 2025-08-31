import React from "react";
import "../css/reset.css";
import "../css/allMoviesDesktop.css";
import "../css/allMoviesMobile.css";
import BoxImg from "../components/BoxImg/BoxImg";
import TitleAndYear from "../components/TitleAndYear/TitleAndYear";
import Pagination from "../components/Pagination/Pagination";

//28 boximg

const AllMoviesSeries: React.FC = () => {
    return (
        <>
            <main>
                <div className="container-content">
                    <div className="content-title">
                        <TitleAndYear title="COMÉDIA" year={2001} />
                    </div>
                    <div className="content-img">
                        <div className="img">
                            <div>
                                <BoxImg />
                                <BoxImg />
                                <BoxImg />
                                <BoxImg />
                                <BoxImg />
                                <BoxImg />
                                <BoxImg />
                                <BoxImg />
                                <BoxImg />
                                <BoxImg />
                                <BoxImg />
                            </div>
                        </div>
                    </div>
                    <div className="content-pagination">
                        <div className="pagination">
                            <Pagination number={1} />
                            <Pagination number={2} />
                            <Pagination number={3} />
                            <Pagination number={4} />
                            <Pagination number={5} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AllMoviesSeries;
