function PersonalCard() {
    return(
        <div className="container-card-item">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img id="profile-picture" src="images/profilepic.jpg" />
                        <h5 className="h5-name">THERESE MAJLUND</h5>
                        <p className="net-title">.NET DEVELOPER</p>
                    </div>
                    <div className="flip-card-back">
                        <div className="icon-container">
                            <div className="icon-stack">
                                <a className="icon-link" href="mailto:therese.majlund@gmail.com"><i id="envelope-img" className="fas fa-envelope" aria-hidden="true"></i></a>
                            </div>
                            <br />
                        </div>
                        <div className="icon-stack">
                            <a className="icon-link" href="https://www.linkedin.com/in/therese-majlund/" target="_blank"><i id="linkedin-img" className="fab fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                        <br />
                        <div className="icon-stack">
                            <a className="icon-link" href="https://github.com/tmajlund" target="_blank"><i id="github-img" className="fab fa-github" aria-hidden="true" ></i></a>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    );
}