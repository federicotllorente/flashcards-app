import React from 'react';
import { Link } from 'react-router-dom';

import OpenMenuButton from '../img/Burger Menu Button.png';
import Logo from '../img/Logo light.png';

const MenuHeaderViews = props => {
    return (
        <div className="menu menu--closed">
            <div className="menu__header">
                <button id="open_menu_btn" onClick={props.handleOpenMenu}>
                    <img src={OpenMenuButton} alt="Open Menu Button" />
                </button>
                <Link to="/">
                    <img className="menu__header__logo" src={Logo} alt="Logo" />
                </Link>
                <div className="menu__header__profile">
                    <Link to="/profile">
                        <img src="https://mir-s3-cdn-cf.behance.net/user/276/2aa2be101429359.5fe347ac143e2.png" alt="Profile" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MenuHeaderViews;