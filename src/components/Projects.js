// Import Assets
import web3 from '../assets/WEB3_Final.jpg';
import adhd from '../assets/ADHD_Word_Cloud_in_Blue.png';
import sometoken from '../assets/CreateMyOwnToken_SOME_on_binance_test_net_cropped.png';

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
                    <a href="https://github.com/idsme/web3-caland3-tutorial" target="_blank" className="button">Code</a>
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
                    <a href="https://github.com/idsme/get_it_done_vue" target="_blank" className="button">Code</a>
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
                <div className="projects__card">
                    <h3>My crypto token</h3>
                    <img src={sometoken} alt="Uniswap Swap Page" />
                    <p>
                        The best token ever .. The one the only SOME-thing token ;)
                    </p>
                    <a href="https://testnet.bscscan.com/address/0xF7c6046C18ac8F8Ac78264e20f91a2e4a18664F7" target="_blank" className="button">Site</a>
                    <a href="https://github.com/idsme/ids-token" target="_blank" className="button">Code</a>
                </div>
                <div className="projects__card">
                    <h3>Angular Challenge</h3>
                    <img alt="code challenge" />
                    <p>
                        Next Level Rxjs autocomplete
                    </p>
                    <a href="https://testnet.bscscan.com/address/0xF7c6046C18ac8F8Ac78264e20f91a2e4a18664F7" target="_blank" className="button">Site</a>
                    <a href="https://github.com/idsme/ids-token" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
