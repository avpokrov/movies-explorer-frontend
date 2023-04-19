import './Footer.css';

function Footer () {
    return (
        <section className='Footer'>
            <p className='Footer__text Footer__heading'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='Footer__border'></div>
            <div className='Footer__block'>
                <p className='Footer__text'>2000</p>
                <div className='Footer__block_right'>
                    <p className='Footer__text'>Яндекс.Практикум</p>
                    <a className='Footer__text Footer__link' href="test">Github</a>
                </div>

            </div>

        </section>

    );
}

export default Footer;