import React from 'react';
import { Link } from 'react-router-dom';

import CloseMenuButton from '../img/Close Burger Menu Button.png';
import Logo from '../img/Logo light.png';

const MenuViews = props => {
    return (
        <div className="menu">
            <div className="menu__header">
                <button id="close_menu_btn" onClick={props.handleCloseMenu}>
                    <img src={CloseMenuButton} alt="Close Menu Button" />
                </button>
                <img className="menu__header__logo" src={Logo} alt="Logo" />
            </div>
            <div className="menu__links">
                {props.menuItems.map(el =>
                    (props.currentPage.pathname === el.path) ? (
                        <Link key={el.id} className="currentPage" to={el.path}>{el.name}</Link>
                    ) : (
                        <Link key={el.id} to={el.path}>{el.name}</Link>
                    )
                )}
            </div>
            <div className="menu__footer">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quasi obcaecati nisi ut provident, reprehenderit porro praesentium sunt? Nostrum, eum.</p>
                <p>Copyright <a href="https://www.github.com/federicotllorente/" target="_blank" rel="noreferrer">Federico Tejedor Llorente</a></p>
            </div>
        </div>
    );
}

export default MenuViews;