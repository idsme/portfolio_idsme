// Import Assets
import web3 from '../assets/WEB3_Final.jpg';
import adhd from '../assets/ADHD_Word_Cloud_in_Blue.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Booking Web3-Dapp</h3>
                    <img
                        src="https://c.pxhere.com/photos/03/1d/entrepreneur_startup_start_up_man_planing_business_office_businessman-764648.jpg!d"
                        srcSet="https://c.pxhere.com/photos/03/1d/entrepreneur_startup_start_up_man_planing_business_office_businessman-764648.jpg!d"
                        alt="Currently working on Booking Dapp"/>
                    <p>
                        Why hire with fiat. (WIP)
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="https://github.com/idsme/portfolio_idsme" target="_blank" className="button">Code</a>
                </div>
                <div className="projects__card">
                    <h3>Task Tracker Kids</h3>
                    <img
                        src={adhd}
                        alt="Easy Task tracker"/>
                    <p>
                       The power of organized ADHD. (WIP)
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="https://github.com/idsme/portfolio_idsme" target="_blank" className="button">Code</a>
                </div>
                <div className="projects__card">
                    <h3>Web3 IPFS portfolio</h3>
                    <img src={web3} alt="Uniswap Swap Page" />
                    <p>
                        Web3?</p>
                    <p>
                        Yes, this site is Web3 ;)
                    </p>
                    <p>
                        What would you like to know?
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="https://github.com/idsme/portfolio_idsme" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
