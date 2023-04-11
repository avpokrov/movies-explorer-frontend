import "./NavTab.css";

function NavTab(props) {
    const {elementsMenu} = props

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