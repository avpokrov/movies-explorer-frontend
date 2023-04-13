import './AboutMe.css';
import Heading from '../Heading/Heading';
import photo from '../../../images/AboutMe__photo.png'

function AboutMe () {
    return (
        <section className='AboutMe__main'>
            <Heading heading='Студент'/>
            <div className='AboutMe__block'>
                <div>
                    <h2 className='AboutMe__header'>Виталий</h2>
                    <h3 className='AboutMe__info'>Фронтенд-разработчик, 30 лет</h3>
                    <p className='AboutMe__text'>
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                        У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                         бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                          После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами
                           и ушёл с постоянной работы.
                    </p>
                    <a href="http://github.com" className='AboutMe__link'>Github</a>

                </div>
                <img className='AboutMe__photo' src={photo} alt=""/>
            </div>
        </section>

    );
}

export default AboutMe;