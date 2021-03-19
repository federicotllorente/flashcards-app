import React from 'react';
import { Link, useParams } from 'react-router-dom';

import NotFound from './NotFound';
import { categoryList, cardsPerCategory } from '../db';
import addCardButton from '../img/Icon Add.png';

const Category = () => {
    const path = useParams();
    const currentCat = categoryList.find(cat => cat.path.substring(1) === path.path);
    if (currentCat) {
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
                        <Link to={`${path.path}/add`}>
                            <img src={addCardButton} alt="Add Card Button" />
                            <p>Add a new card</p>
                        </Link>
                    </div>
                    {cardList.map(el => (
                        <div key={el.id} className="category__card_list__item">
                            <Link to={`${el.id}`}>
                                <p>{el.cardTitle}</p>
                            </Link>
                        </div>
                    ))}
                    {(cardList.length === 0) && (
                        <p>Oh! It seems that you don't have any cards in this category yet. Let's change that <Link to={`flashcards/${path.path}/add`}>adding a new card</Link>!</p>
                    )}
                </div>
            </div>
        );
    }
    return (
        <NotFound />
    );
}

export default Category;