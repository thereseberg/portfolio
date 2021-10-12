function ProjectWeatherApp() {
    return(
        <div className="card cards-design">
            <div className="card-body">
                <p style={{textAlign:"center"}}>
                    <a href="https://github.com/tmajlund/WeatherApp"><i className="fas fa-cloud project-icon"></i></a>
                </p>
                <h5 style={{textAlign:"center", opacity: "0.6"}}>Weather App</h5>
                <p style={{opacity: "0.6"}}>
                    Built with React and data from <a className="link-about" href="https://openweathermap.org/">OpenWeather</a>. 
                    Search-functions for cities and a 6-days prognosis.
                </p>
            </div>
        </div>        
    );
}