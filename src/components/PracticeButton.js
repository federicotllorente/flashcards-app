import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import PracticeBtnImage from '../img/Burger Menu Button.png';

const PracticeButton = () => {
    const location = useLocation();
    let locationFlashcards = (location.pathname.includes('/flashcards'));
    let locationAdd = (location.pathname.includes('/add'));
    let locationLogin = (location.pathname.includes('/login'));
    let locationRegister = (location.pathname.includes('/register'));
    if ((locationFlashcards && locationAdd) || locationLogin || locationRegister) return null;
    return (
        <div className="practice_button">
            <Link to="/practice">
                <img src={PracticeBtnImage} alt="Practice Button" />
                <p>Practice</p>
            </Link>
        </div>
    );
};

export default PracticeButton;