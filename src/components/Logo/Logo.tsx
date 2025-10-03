import React from "react";
import hboLogo from "../../assets/hbo.png";
import netflixLogo from "../../assets/netflix.png";
import amazonLogo from "../../assets/amazon.png";
import disneyLogo from "../../assets/disney.png";
import sadFace from "../../assets/sad-face.png";
import globoLogo from "../../assets/globo.png";
import youtubeLogo from "../../assets/youtube.png";

interface LogoProps {
    logo: string,
    size?: number,
}

const Logo: React.FC<LogoProps> = (props: LogoProps) => {

    const chooseLogo = () => {
        switch (props.logo) {
            case "HBO Max":
                return hboLogo;
            case "Netflix":
                return netflixLogo;
            case "Amazon Video":
                return amazonLogo;
            case "Disney Plus":
                return disneyLogo;
            case "sadFace":
                return sadFace;
            case "Globoplay":
                return globoLogo;
            case "YouTube":
                return youtubeLogo;
            default:
                return "";
        }
    }

    const altText = () => {
        switch (props.logo) {
            case "hbo":
                return "Logo HBO Max";
            case "netflix":
                return "Logo Netflix";
            case "amazon":
                return "Logo Amazon";
            case "disney":
                return "Logo Disney";
            case "sadFace":
                return "Logo Sad Face";
            case "globo":
                return "Logo Globo Play";
            case "youtube":
                return "Logo Youtube";
            default:
                return "";
        }
    }

    const size = props.size || 35;

    return (
        <img src={chooseLogo()}
            alt={altText()}
            style={{ width: size, height: size }} />
    );
};

export default Logo;
