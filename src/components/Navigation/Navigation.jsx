import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation (props) {
    const {menu} = props;
    return (
        <nav className="Navigation">
            {menu.map((item, i) => (
                <Link key={i} to={item.route} className="Navigation__link">
                    {item.name}
                </Link>
            ))}
        </nav>
        )
}

export default Navigation;