import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import MenuHeaderViews from '../views/MenuHeaderViews';
import MenuViews from '../views/MenuViews';

const Menu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const menuItems = [
        { id: 1, name: 'Dashboard', path: '/' },
        { id: 2, name: 'Flashcards', path: '/flashcards' },
        { id: 3, name: 'Practice', path: '/practice' },
        { id: 4, name: 'Profile', path: '/profile' },
        { id: 5, name: 'Settings', path: '/settings' },
        { id: 6, name: 'Contact', path: '/contact' }
    ];
    const flashcardFilters = [
        { id: 1, name: 'All the categories', path: '/flashcards' },
        { id: 2, name: 'To practice in 1 week', path: '/flashcards' },
        { id: 3, name: 'To practice in 1 month', path: '/flashcards' },
        { id: 4, name: 'To practice in 6 months', path: '/flashcards' }
    ];
    const currentPage = useLocation();
    const handleOpenMenu = () => {
        setMenuIsOpen(true);
    };
    const handleCloseMenu = () => {
        setMenuIsOpen(false);
    };
    return (
        <React.Fragment>
            <MenuHeaderViews handleOpenMenu={handleOpenMenu} />
            {(menuIsOpen) && (
                <MenuViews
                    menuItems={menuItems}
                    flashcardFilters={flashcardFilters}
                    currentPage={currentPage}
                    handleCloseMenu={handleCloseMenu}
                />
            )}
        </React.Fragment>
    );
}

export default Menu;