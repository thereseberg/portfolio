function Projects(){
    return(
        <div className="projects-outer "id="projects">
            <div id="projects-inner">
                <h2 style={{textAlign:"center", color:"white", opacity: "0.4"}}>Projects</h2>
                <hr/>
                <ProjectWebshop />
                <ProjectPizzeria />
                <ProjectWeatherApp />
            </div>
        </div>
    );
}