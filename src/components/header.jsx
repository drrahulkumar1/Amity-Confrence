import React from "react";
import '../styles/header.css';
import logo from '../images/logo.png';

function Header() {    
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg pastel-navbar px-0 py-3" id="navbar">
                <div className="container-xl">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="logo" alt="Amity logo" />
                    </a>
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
                            <a className="nav-item nav-link active" href="/" aria-current="page">Home</a>
                            <a className="nav-item nav-link" href="/#mainabout">About</a>
                            <a className="nav-item nav-link" href="/#speakers">Speakers</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Schedule</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/schedule/day1">Day 1</a>
                                    <a className="dropdown-item" href="/schedule/day2">Day 2</a>
                                    <a className="dropdown-item" href="/schedule/day3">Day 3 (Awarding Ceremony)</a>
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
