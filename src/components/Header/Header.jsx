import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <section className='Header'>
            <div className='Header__main'>
                <div className='Header__block-menu'>
                    <Logo/>
                    <span className='Header__block'></span>
                    <Navigation 
                        menu={[{
                                name: 'Фильмы',
                                route: '/movies'},
                            {
                                name: 'Сохраненные фильмы',
                                route: '/saved-movies'
                            }]
                            }/>
                </div>
                <div className='Header__block-menu'>
                    <Navigation 
                        menu={[{
                                name: 'Регистрация',
                                route: '/signup'},
                            ]
                            } />
                    <span className='Header__block'></span>
                    <button className='Header__button-enter' >Войти</button>
                </div>
            </div>    
        </section>        
    );
}

export default Header;