import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation () {
    return (
        <nav className="Navigation">
            <Link to="/movies" className="Navigation__link">
                Фильмы
            </Link>
            <Link to="/saved-movies" className="Navigation__link">
                Сохраеннные фильмы
            </Link>    
        </nav>
    );
}

export default Navigation;