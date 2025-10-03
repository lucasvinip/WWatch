import React from "react";
import { useNavigate } from "react-router-dom";

import "./boxImg.css";

interface BoxImgProps {
    height?: string;
    width?: string;
    src?: string;
    alt?: string;
    onClick?: () => void;
}

const BoxImg: React.FC<BoxImgProps> = (props: BoxImgProps) => {

    return (
        <img
            src={props.src}
            alt=""
            style={{ height: props.height, width: props.width }}
            onClick={props.onClick} />
    );
}

export default BoxImg;
