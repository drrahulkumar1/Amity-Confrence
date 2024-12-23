import React from "react";
import '../styles/header.css';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";

function Header() {    
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg pastel-navbar px-0 py-3" id="navbar">
                <div className="container-xl">
                    <Link to="/">
                        <img src={logo} className="logo" alt="Amity logo" />
                        </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarCollapse" 
                        aria-controls="navbarCollapse" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-lg-auto">
                            <a className="nav-item nav-link" href="/" aria-current="page">Home</a>
                            <a className="nav-item nav-link" href="/#mainabout">About</a>
                            <a className="nav-item nav-link" href="/#speakers">Speakers</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Schedule</a>
                                <div className="dropdown-menu">
                                    <Link to="/Day1" style={{"display":"block", "margin":"0 50px"}}>Day1</Link>
                                    <Link to="/Day2" style={{"display":"block", "margin":"0 50px"}}>Day2</Link>
                                </div>
                            </div>          
                            <a className="nav-item nav-link" href="#footer">Contact</a>
                        </div>
                        <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                        <a 
    href="/register" 
    type="button" 
    className="btn register-btn"
>
    Register
</a>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
