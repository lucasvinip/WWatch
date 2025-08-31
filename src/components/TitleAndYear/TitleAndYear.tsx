import React from "react";

interface TitleAndYearProps {
    title: string;
    year: number;
}

const TitleAndYear: React.FC<TitleAndYearProps> = ({ title, year }) => {
    return (
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
    );
};

export default TitleAndYear;