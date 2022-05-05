// Import Assets
import react_basic from '../assets/cert_react_basic.png';
import javascript_basic from '../assets/cert_javascript_basic.png';
import javascript_intermediate from '../assets/cert_java_script_intermediate.png';


const Certs = () => {
    return (
        <section className="projects">
            <h2>My Certifications</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>React Basic</h3>
                    <img src={react_basic} alt="React Basic Certificate" />
                    <p>So you don't have to take my word</p>
                    <a href="https://www.hackerrank.com/certificates/20c4ee309a17" target="_blank" className="button">Issuer</a>
                    {/*<a href="https://github.com/idsme/portfolio_idsme" target="_blank" className="button">Code</a>*/}
                </div>
                <div className="projects__card">
                    <h3>Javascript Basic</h3>
                    <img src={javascript_basic} alt="Javascript Intermediate Certificate" />
                    <p>So you don't have to take my word</p>
                    <a href="https://www.hackerrank.com/certificates/4e56178b91a4" target="_blank" className="button">Issuer</a>
                    {/*<a href="https://github.com/idsme/portfolio_idsme" target="_blank" className="button">Code</a>*/}
                </div>
                <div className="projects__card">
                    <h3>Javascript Intermediate</h3>
                    <img src={javascript_intermediate} alt="Javascript Intermediate Certificate" />
                    <p>So you don't have to take my word</p>
                    <a href="https://www.hackerrank.com/certificates/bcc3aa5be6fe" target="_blank" className="button">Issuer</a>
                    {/*<a href="https://github.com/idsme/portfolio_idsme" target="_blank" className="button">Code</a>*/}
                </div>
            </div>
        </section>
    );
}

export default Certs;
