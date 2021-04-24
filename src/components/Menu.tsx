import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { MenuItem, FlashcardFilter } from '../interfaces-types';
import MenuHeaderViews from '../views/MenuHeaderViews';
import MenuViews from '../views/MenuViews';

const Menu = (): JSX.Element | null => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    const menuItems: MenuItem[] = [
        { id: 1, name: 'Dashboard', path: '/' },
        { id: 2, name: 'Flashcards', path: '/flashcards' },
        { id: 3, name: 'Practice', path: '/practice' },
        { id: 4, name: 'Profile', path: '/profile' },
        { id: 5, name: 'Settings', path: '/settings' },
        { id: 6, name: 'Contact', path: '/contact' }
    ];
    const flashcardFilters: FlashcardFilter[] = [
        { id: 1, name: 'All the categories', path: '/flashcards' },
        { id: 2, name: 'To practice in 1 week', path: '/flashcards' },
        { id: 3, name: 'To practice in 1 month', path: '/flashcards' },
        { id: 4, name: 'To practice in 6 months', path: '/flashcards' }
    ];
    const currentPage = useLocation<{ pathname: string }>(); // See this
    const handleOpenMenu = (): void => {
        setMenuIsOpen(true);
    };
    const handleCloseMenu = (): void => {
        setMenuIsOpen(false);
    };
    let locationLogin: boolean = (currentPage.pathname.includes('/login'));
    let locationRegister: boolean = (currentPage.pathname.includes('/register'));
    if (locationLogin || locationRegister) return null;
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