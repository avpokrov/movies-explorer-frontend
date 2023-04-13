import './Portfolio.css'

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
                <a className='Portfolio__link' href={element.route}>{element.name}</a>
            </div>
    ));    
    return (
        <section className='Portfolio__main'>
            <h3 className='Portfolio__header'>Портфолио</h3>
            <nav className='Portfolio__menu_main'>
                {menuPortfolio}
            </nav>
        </section>
    );
}

export default Portfolio;