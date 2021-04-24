import React from 'react';
import { Link } from 'react-router-dom';

import { ICategory } from '../interfaces-types';
import { categoryList } from '../db';

const Categories = (): JSX.Element => {
    return (
        <div className="category">
            <h1>This is your flashcard collection</h1>
            <div className="category__header">
                <h2>Categories</h2>
                <button className="category__header__add_button">
                    Create a new category
                </button>
            </div>
            <div className="category__list">
                {categoryList.map((el: ICategory) => (
                    <div key={el.id} className="category__list__item">
                        <Link to={'/flashcards' + el.path}>
                            <h3>{el.name}</h3>
                            {(el.cards === 0) ? (
                                <span>{el.cards}<span> cards yet</span></span>
                            ) : (el.cards === 1) ? (
                                <span>{el.cards}<span> card in total</span></span>
                            ) : (
                                <span>{el.cards}<span> cards in total</span></span>
                            )}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;