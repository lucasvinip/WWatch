import React from "react";
import "./boxImg.css";

interface BoxImgProps {
    height?: string;
    width?: string;
}

const BoxImg: React.FC<BoxImgProps> = ({ height, width }) => {
    return (
        <img src="" alt="" style={{ height, width }} />
    );
}

export default BoxImg;