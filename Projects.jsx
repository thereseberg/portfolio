function Projects(){
    return(
        <div className="projects-outer "id="projects">
            <div id="projects-inner">
                <br/><br/>
                <h2 style={{textAlign:"center", color:"white", opacity: "0.4"}}>SCHOOL PROJECTS</h2>
                <hr/>
                <div className="card-deck" style={{fontSize: "18px"}}>
                    <ProjectWebshop />
                    <ProjectPizzeria />
                    <ProjectWeatherApp />
                    <ProjectVoting />
                </div>
            </div>
        </div>
    );
}