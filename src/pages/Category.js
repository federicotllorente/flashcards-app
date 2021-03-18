import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { categoryList, cardsPerCategory } from '../db';
import addCardButton from '../img/Icon Add.png';

const Category = () => {
    const path = useParams();
    const currentCat = categoryList.find(cat => cat.path.substring(1) === path.path);
    const cardList = cardsPerCategory(currentCat.id);
    return (
        <div className="category">
            <h1>This is your flashcard collection</h1>
            <div className="category__header">
                <h2>All cards in <span>{path.path}</span></h2>
                <button className="category__header__filter_button">
                    Filter cards
                </button>
                <input
                    type="text"
                    name="search_cards"
                    id="search_cards"
                    placeholder="Search a card"
                />
            </div>
            <div className="category__card_list">
                <div className="category__card_list__item category__card_list__item--add">
                    <img src={addCardButton} alt="Add Card Button" />
                    <p>Add a new card</p>
                </div>
                {cardList.map(el => (
                    <div key={el.id} className="category__card_list__item">
                        <p>{el.cardTitle}</p>
                    </div>
                ))}
                {(cardList.length === 0) && (
                    <p><Link to={`flashcards/${path.path}/add`}>Add a new card!</Link></p>
                )}
            </div>
        </div>
    );
}

export default Category;