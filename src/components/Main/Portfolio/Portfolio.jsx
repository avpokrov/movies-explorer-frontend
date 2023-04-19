import './Portfolio.css';
import linkImg from '../../../images/Portfolio__link.png';

function Portfolio () {

    const portLinks = 
        [{name: 'Страничный сайт',
          route: ''},
        {name: 'Адаптивный сайт',
          route: ''},
        {name: 'Одностроничное приложение',
         route: ''}
        ]
    const menuPortfolio = portLinks.map((element,item) => (
            <div key={item} className='Portfolio__menu_item'>
                <a className='Portfolio__link' href={element.route}>
                    <h2 className='Portfolio__link_header'>{element.name}</h2>
                    <img className='Portfolio__link-img' src={linkImg} alt=""/>
                </a>
                <div className='Portfolio__menu_border'></div>
            </div>
    ));    
    return (
        <section className='Portfolio__main'>
            <h3 className='Portfolio__header'>Портфолио</h3>
            <nav className='Portfolio__menu_main'>
                {menuPortfolio}
            </nav>
            <div className='Portfolio__block'></div>
        </section>
    );
}

export default Portfolio;