import React from 'react'
import logo from "../logo192.png"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid mx-3">
                <a className="navbar-brand" href="#"><img src={logo}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>

                        <li class="nav-item">
                            <a className="nav-link" href="#">Sevices</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Contacts</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar