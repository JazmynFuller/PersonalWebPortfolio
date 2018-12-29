import React from "react"

function MyNav() {
  return (
    <div>
      <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">JazmynFuller</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projectsPortion">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Music</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Baking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../travel.html">Travel</a>
            </li>
          </ul>
        </div>
      </nav>
      </header>
    </div>
    )
}

export default MyNav