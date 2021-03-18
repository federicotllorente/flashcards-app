import React from 'react';
import { Link } from 'react-router-dom';

import PracticeBtnImage from '../img/Burger Menu Button.png';

const PracticeButton = () => {
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