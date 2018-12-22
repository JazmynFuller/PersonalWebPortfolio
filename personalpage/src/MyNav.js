import React from "react"

function MyNav() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">Jazmyn Fuller</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Music</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Baking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Travel</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default MyNav