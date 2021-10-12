function About() {
    return(
        <div className="about-div-container" id="about">
            <div className="about-div-inner">          
                <div className="card cards-design-about">
                    <div className="card-body" style={{opacity:"0.6", fontSize: "19px"}}>
                        Hello! 
                        <br/><br/>
                        My name is Therese Majlund and I'm a .NET-student residing in Nynäshamn studying at Nackademin.
                        <br/><br/>
                        C#/.NET and backend have a special place in my heart but I also have experience with JS and React. 
                        You can see some of the things I've worked on over on my <a className="link-about" href="https://github.com/tmajlund">GitHub page</a>.
                        <br/> 
                        You can also find me on <a className="link-about" href="https://www.linkedin.com/in/therese-majlund/">LinkedIn</a>.
                    </div>                
                </div>
            </div>
        </div>
    )
}