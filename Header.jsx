function Header(){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark" id="top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="#top">Home <span className="sr-only">(current)</span></a>
                        </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">About me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}