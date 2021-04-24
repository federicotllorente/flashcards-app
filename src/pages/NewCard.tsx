import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const NewCard = () => {
    const [cardTitle, setCardTitle] = useState('This is the card title');
    const [cardContent, setCardContent] = useState('This is the card content/description');
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        setCardTitle(e.target.value);
    };
    const handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
        setCardContent(e.target.value);
    };
    const path: { path: string } = useParams();
    return (
        <div className="new_card">
            <h1>Create a new flashcard</h1>
            <div className="new_card__header">
                <h2>This will be in <span>{path.path}</span></h2>
                <button className="new_card__header__add_button">Add the card</button>
                <button className="new_card__header__cancel_button">Cancel</button>
            </div>
            <div className="new_card__form">
                <input
                    type="text"
                    name="card_title"
                    id="card_title"
                    placeholder="Card title/name (it can be a concept or idea, a word or a phrase)"
                    onChange={handleInputChange}
                />
                <div className="new_card__form__body">
                    <textarea
                        name="card_content"
                        id="card_content"
                        placeholder="Card content/description (it should be the meaning or explanation of the concept or idea you want to learn or remember)"
                        onChange={handleTextareaChange}
                    ></textarea>
                    <div className="new_card__form__body__preview">
                        <div className="new_card__form__body__preview__item">
                            <p>{cardTitle}</p>
                        </div>
                        <div className="new_card__form__body__preview__item">
                            <p>{cardContent}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="new_card__example">
                <h3>Here's an example...</h3>
                <p><span>Card title: </span>Cardiology</p>
                <p><span>Card content: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vitae modi ab dolor. Rem, placeat.</p>
            </div>
        </div>
    );
}

export default NewCard;