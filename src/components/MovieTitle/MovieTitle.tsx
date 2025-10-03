import React from "react";

interface MovieTitleProps {
    title: string | undefined;
}

const MovieTitle: React.FC<MovieTitleProps> = ({title}) => {
    return (
        <span>
            {title}
        </span>
    );
};

export default MovieTitle;
