import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import CloseMenuButton from '../img/Close Burger Menu Button.png';
import Logo from '../img/Logo light.png';

const Menu = () => {
    const menuItems = [
        { id: 1, name: 'Dashboard', path: '/' },
        { id: 2, name: 'Flashcards', path: '/flashcards' },
        { id: 3, name: 'Practice', path: '/practice' },
        { id: 4, name: 'Settings', path: '/settings' },
        { id: 5, name: 'Contact', path: '/contact' }
    ];
    const currentPage = useLocation();
    return (
        <div className="menu">
            <div className="menu__header">
                <button id="close_menu_btn">
                    <img src={CloseMenuButton} alt="Close Menu Button" />
                </button>
                <img src={Logo} alt="Logo" />
            </div>
            <div className="menu__links">
                {menuItems.map(el =>
                    (currentPage.pathname === el.path) ? (
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

export default Menu;