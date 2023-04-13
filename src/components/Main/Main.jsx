import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import AboutMe from './AboutMe/AboutMe';

function Main() {
    return (
        <>
            <Promo />
            <AboutProject />
            <Techs/>
            <AboutMe />
            <Portfolio />
        </>
    );
}

export default Main;
