import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categoryList = [
        { id: 1, name: 'Category name 1', path: '/cat1', cards: 3 },
        { id: 2, name: 'Category name 2', path: '/cat2', cards: 5 },
        { id: 3, name: 'Category name 3', path: '/cat3', cards: 0 },
        { id: 4, name: 'Category name 4', path: '/cat4', cards: 1 }
    ];
    return (
        <div className="category">
            <h1>This is your flashcard collection</h1>
            <div className="category__header">
                <h2>Categories</h2>
                <button>Create a new category</button>
            </div>
            <div className="category__list">
                {categoryList.map(el => (
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