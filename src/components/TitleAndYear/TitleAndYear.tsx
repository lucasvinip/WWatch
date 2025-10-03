import React from "react";

interface TitleAndYearProps {
    title: string | number | undefined;
    year: string | undefined;
}

const TitleAndYear: React.FC<TitleAndYearProps> = ({ title, year }) => {
    const handleGenres = () => {
        switch (title) {
            case "10749":
                return "ROMANCE";
            case "28":
                return "AÇÃO";
            case "12":
                return "AVENTURA";
            case "35":
                return "COMÉDIA";
            case "18":
                return "DRAMA";
            default:
                return "";
        }
    };
    
    return (
        <div>
            <span>
                {handleGenres()}
            </span>
            <span>
                -
            </span>
            <span>
                {year}
            </span>
        </div>
    );
};

export default TitleAndYear;