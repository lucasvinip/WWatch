import React from "react";
import "./boxImg.css";

interface BoxImgProps {
    height?: string;
}

const BoxImg: React.FC<BoxImgProps> = ({ height }) => {
    return (
        <img src="" alt="" style={{ height }} />
    );
}

export default BoxImg;