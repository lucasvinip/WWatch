import React from "react";



interface MovieVideoProps {
    src: string | undefined;
    style: React.CSSProperties;
}

const MovieVideo: React.FC<MovieVideoProps> = ({ src, style }) => {
    return (
        <iframe
            style={style}
            src={src}
            allowFullScreen >
        </iframe >
    );
};

export default MovieVideo;
