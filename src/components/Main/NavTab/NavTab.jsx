import "./NavTab.css";

function NavTab(props) {
    const {elementsMenu, typeMenu} = props

    const navMenu = elementsMenu.map((element, item) => (
        <a key={item} type="button" className={`navTab__element-${typeMenu}`} href={element.route}>{element.name}</a>
    ));

    return (
        <nav className="NavTab">
            {navMenu}
        </nav>
    );
}

export default NavTab;