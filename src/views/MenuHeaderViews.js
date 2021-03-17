import React from 'react';

import OpenMenuButton from '../img/Burger Menu Button.png';
import Logo from '../img/Logo light.png';

const MenuHeaderViews = props => {
    return (
        <div className="menu menu--closed">
            <div className="menu__header">
                <button id="open_menu_btn" onClick={props.handleOpenMenu}>
                    <img src={OpenMenuButton} alt="Open Menu Button" />
                </button>
                <img src={Logo} alt="Logo" />
            </div>
        </div>
    );
}

export default MenuHeaderViews;