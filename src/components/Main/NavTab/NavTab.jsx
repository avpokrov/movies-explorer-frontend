import "./NavTab.css";

function NavTab() {
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

    const navMenu = elementsMenu.map((element, item) => (
        <a key={item} type="button" className="navTab__element" href={element.route}>{element.name}</a>
    ));

    return (
        <nav className="NavTab">
            {navMenu}
        </nav>
    );
}

export default NavTab;