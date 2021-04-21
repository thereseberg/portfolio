function PersonalCard() {
    return(
        <div className="container-card-item">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img id="profile-picture" src="images/profilepic.jpg" />
                        <h5 className="h5-name">Therese Berg</h5>
                        <p className="net-title">.NET Developer</p>
                    </div>
                    <div className="flip-card-back">
                        <div className="icon-container">
                            <div className="icon-stack">
                                <a className="icon-link" href="mailto:therese.berg@perduco.se"><i id="envelope-img" className="fa fa-envelope" aria-hidden="true"></i></a>
                            </div>
                            <br />
                        </div>
                        <div className="icon-stack">
                            <a className="icon-link" href="https://www.linkedin.com/in/therese-berg/"><i id="linkedin-img" className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        </div>
                        <br />
                        <div className="icon-stack">
                            <a className="icon-link" href="https://github.com/thereseberg"><i id="github-img" className="fa fa-github-square" aria-hidden="true" ></i></a>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    );
}