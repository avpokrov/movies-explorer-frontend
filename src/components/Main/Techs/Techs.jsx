import './Techs.css';
import Heading from '../Heading/Heading';
import NavTab from '../NavTab/NavTab';

function Techs () {
    const elementsMenu = [{
        name: 'HTML',
        route: ''
    },{
        name: 'CSS',
        route: '' 
    },{
        name: 'JS',
        route: '',
        
    },{
        name: 'React',
        route: '',
    },{
        name: 'Git',
        route: '',
    },{
        name: 'Express.js',
        route: '',
    },{
        name: 'mongoDB',
        route: '',
    }]

    return (
        <section className='Techs'>
            <div className='Techs__main'>
                <Heading heading='Технологии'/>
                <div className='Techs__block'>
                    <h2 className="Techs__title">7 технологий</h2>
                    <p className='Techs__text'>На курсе веб-разработки мы освоили технологии, 
                         которые применили в дипломном проекте.
                    </p>
                    <NavTab elementsMenu={elementsMenu}/>
                </div>
                
            </div>
        </section>
    );
}

export default Techs;