import React from "react";

const NavBar = (props) => {
    return (
        <nav class="navbar navbar-dark bg-dark fixed-top">
            <a class="navbar-brand">Clicky Game</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div class="nav-link"> Score: <span>{props.score}</span> </div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link"> Top Score: <span>{props.topscore}</span> </div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link"> Message: <span>{props.message}</span> </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar