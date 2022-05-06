const Social = () => {
    return (
        <>
            <div className="social" style={{fontSize:"48px"}}>
                {/*<h2>More info:</h2>*/}
                <a href="mailto:idsmesales@gmail.com" style={{color: "#EA4335"}} className="icon"><i className="fa-solid fa-at"></i></a>
                <a href="https://nl.linkedin.com/in/idsachterhof" style={{color: "#0a66c2"}} className="icon"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://www.hackerrank.com/certificates/20c4ee309a17" style={{color: "#1ba94c"}} className="icon"><i className="fab fa-hackerrank"></i></a>
                <a href="https://github.com/idsme" className="icon" style={{color: "#24292f"}} ><i className="fa-brands fa-github"></i></a>
            </div>
        </>
    );
}
export default Social;
