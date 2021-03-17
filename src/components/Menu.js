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
        { id: 4, name: 'Settings', path: '/settings' },
        { id: 5, name: 'Contact', path: '/contact' }
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
                    currentPage={currentPage}
                    handleCloseMenu={handleCloseMenu}
                />
            )}
        </React.Fragment>
    );
}

export default Menu;