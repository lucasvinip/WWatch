import "../css/reset.css";
import "../css/notFound.css";
import Logo from "../components/Logo/Logo";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div className="container-not-found">
            <Logo logo="sadFace" size={200} />
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to="/" className="btn-round">Voltar para a página inicial</Link>
        </div>
    );
};

export default NotFound;