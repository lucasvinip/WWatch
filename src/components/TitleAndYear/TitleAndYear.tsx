import React from "react";
import "./titleAndYear.css";

interface TitleAndYearProps {
    title: string;
    year: number;
}

const TitleAndYear: React.FC<TitleAndYearProps> = ({ title, year }) => {
    return (
        <div className="content-title">
            <div>
                <span>
                    {title.toUpperCase()}
                </span>
                <span>
                    -
                </span>
                <span>
                    {year}
                </span>
            </div>
        </div>
    );
};

export default TitleAndYear;