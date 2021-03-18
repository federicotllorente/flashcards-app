import React from 'react';

import PracticeBtnImage from '../img/Burger Menu Button.png';

const PracticeButton = () => {
    return (
        <button className="practice_button">
            <img src={PracticeBtnImage} alt="Practice Button" />
            Practice
        </button>
    );
};

export default PracticeButton;