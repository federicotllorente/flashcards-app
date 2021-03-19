import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import PracticeBtnImage from '../img/Burger Menu Button.png';

const PracticeButton = () => {
    const location = useLocation();
    if (location.pathname.includes('/flashcards') && location.pathname.includes('/add')) {
        return null;
    }
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