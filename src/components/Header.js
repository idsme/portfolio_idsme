// Import Assets
import profile from '../assets/profile.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Ids Achterhof" />

            <div className='header__content'>
                <h1>Hi, I'm Ids Achterhof</h1>
                <p>Blockchain Developer</p>
                <button className='button'>Get In Touch</button>
                {/*<a href="mailto:idsmesales@gmail.com" className='button'>Get In Touch</a>*/}
            </div>
        </section>
    );
}

export default Header;
