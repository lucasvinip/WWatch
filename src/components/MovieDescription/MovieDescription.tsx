import React from "react";
import BoxImg from "../BoxImg/BoxImg";

interface MovieDescriptionProps {
    description: string | undefined;
    src: string | undefined;
}

const MovieDescription: React.FC<MovieDescriptionProps> = ({description, src}) => {
    return (
        <>
            <BoxImg height="38vh" width="15vw" src={src} />
            <p>
                {description}
            </p>
        </>
    );
};

export default MovieDescription;