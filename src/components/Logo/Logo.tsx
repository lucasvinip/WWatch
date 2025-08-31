import React from "react";
import hboLogo from "../../assets/hbo.png";
import netflixLogo from "../../assets/netflix.png";
import playLogo from "../../assets/play.png";
import disneyLogo from "../../assets/disney.png";

interface LogoProps {
    logo: string
}

const Logo: React.FC<LogoProps> = (props: LogoProps) => {

    const chooseLogo = () => {
        switch (props.logo) {
            case "hbo":
                return hboLogo;
            case "netflix":
                return netflixLogo;
            case "play":
                return playLogo;
            case "disney":
                return disneyLogo;
            default:
                return "";
        }
    }

    return (
        <img src={chooseLogo()}
            alt="Logo HBO Max"
            style={{ width: 35, height: 35 }} />
    );
};

export default Logo;
