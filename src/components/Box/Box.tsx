import React from "react";
import "./box.css";
import BoxImg from "../BoxImg/BoxImg";

interface BoxProps {
    year: number;
    threeOrSix?: "mobile";
}

const Box: React.FC<BoxProps> = ({ year, threeOrSix }) => {
    return (
        <div className="box">
            <div className="year">
                <span>
                    {year}
                </span>
            </div>
            <div className='moveseries-img'>
                {
                    threeOrSix === "mobile" ? (
                        <>
                        <BoxImg />
                        <BoxImg />
                        <BoxImg />
                        </>
                    ):(
                        <>
                        <BoxImg />
                        <BoxImg />
                        <BoxImg />
                        <BoxImg />
                        <BoxImg />
                        <BoxImg />
                        </>
                    )
                }
                <div className="seeall">
                    <button>
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