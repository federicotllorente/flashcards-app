import React from 'react';
import { Link } from 'react-router-dom';

import { MenuItem, FlashcardFilter } from '../interfaces-types';
import CloseMenuButton from '../img/Close Burger Menu Button.png';
import Logo from '../img/Logo light.png';

type MenuViewsProps = {
    menuItems: MenuItem[];
    flashcardFilters: FlashcardFilter[];
    currentPage: { pathname: string };
    handleCloseMenu: React.MouseEventHandler<HTMLButtonElement>;
};

const MenuViews = ({ menuItems, flashcardFilters, currentPage, handleCloseMenu }: MenuViewsProps): JSX.Element => {
    return (
        <div className="menu">
            <div className="menu__header">
                <button id="close_menu_btn" onClick={handleCloseMenu}>
                    <img src={CloseMenuButton} alt="Close Menu Button" />
                </button>
                <img className="menu__header__logo" src={Logo} alt="Logo" />
            </div>
            <div className="menu__links">
                {menuItems.map(el =>
                    (currentPage.pathname.includes('/flashcards') && el.path === '/flashcards') ? (
                        <div className="currentPage" key={el.id}>
                            <Link to={el.path}>{el.name}</Link>
                            <div className="subcategories">
                                {flashcardFilters.map(el => <Link key={el.id} to={el.path}>{el.name}</Link>)}
                            </div>
                        </div>
                    ) : (currentPage.pathname === el.path) ? (
                        <div className="currentPage" key={el.id}>
                            <Link to={el.path}>{el.name}</Link>
                        </div>
                    ) : (
                        <div key={el.id}>
                            <Link to={el.path}>{el.name}</Link>
                        </div>
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