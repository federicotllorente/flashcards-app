import React from 'react';
import { Link } from 'react-router-dom';

import CloseMenuButton from '../img/Close Burger Menu Button.png';
import Logo from '../img/Logo light.png';

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu__header">
                <button id="close_menu_btn">
                    <img src={CloseMenuButton} alt="Close Menu Button" />
                </button>
                <img src={Logo} alt="Logo" />
            </div>
            <div className="menu__links">
                <Link to="/">Dashboard</Link>
                <Link to="/flashcards">Flashcards</Link>
                <Link to="/practice">Practice</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="menu__footer">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quasi obcaecati nisi ut provident, reprehenderit porro praesentium sunt? Nostrum, eum.</p>
                <p>Copyright <a href="https://www.github.com/federicotllorente/" target="_blank" rel="noreferrer">Federico Tejedor Llorente</a></p>
            </div>
        </div>
    );
}

export default Menu;