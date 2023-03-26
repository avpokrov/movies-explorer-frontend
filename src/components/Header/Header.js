import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <div className='Header'>
            <div className='Header__test'>
                <Logo/>
                <div className='Header__block'></div>
                <Navigation />
            </div>
            <div className='Header__test'>
                <Logo/>
                <div className='Header__block'></div>
                <Navigation />
            </div>
        </div>        
    );
}

export default Header;