import {NavLink} from "react-router-dom";
import * as React from "react";

const Header = () => {
    return (
        <nav>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            {" | "}
            <NavLink to="/in-app-queue" activeClassName="active">In-App Queue</NavLink>
            {" | "}
            <NavLink to="/about" activeClassName="active">About</NavLink>
        </nav>
    );
};

export default Header;