import "./Promo.css";
import NavTab from "../NavTab/NavTab";

function Promo() {
    const elementsMenu = [{
        name: 'О проекте',
        route: ''
    },{
        name: 'Технологии',
        route: '' 
    },{
        name: 'Студен',
        route: '',
    }]
    
    return (
        <section className="Promo__main">
            <h1 className="Promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <div className='Promo__block'></div>
            <NavTab elementsMenu={elementsMenu} typeMenu='type1'/>
        </section>
    );
}

export default Promo;