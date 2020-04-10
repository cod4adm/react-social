import React from 'react';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <img src="../logo192.png" alt=""/>
            <div className="login_block">
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;