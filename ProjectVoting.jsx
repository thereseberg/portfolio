function ProjectVoting() {
    return(
        <div className="card cards-design">
            <div className="card-body">
                <p style={{textAlign:"center"}}>
                    <a href="https://github.com/tmajlund/tl2021-swa"><i className="fas fa-balance-scale-left project-icon"></i></a>
                </p>
                <h5 style={{textAlign:"center", opacity: "0.6"}}>Voting App</h5>
                <p style={{opacity: "0.6"}}> 
                    Static Web App built with Blazor and built-in API using C#, Azure function app and Table Storage. Hosted on <a className="link-about" href="https://thankful-island-02a825203.azurestaticapps.net/">Azure</a>
                    Collaboration with <a className="link-about" href="https://github.com/pops-git">Linus Krönström</a>
                </p>
            </div>
        </div>
    );
}